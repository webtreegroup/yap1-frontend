import { isEqual, render } from 'utils'
import { IComponent, IState, IStateValue } from 'App.types'
import { EventBus } from './EventBus'

interface IBlockMeta {
    tagName: string
    props: IState
}

export interface IBaseTemplateRender<T = IState> {
    (props?: T): string
}

export interface IBlockChildren {
    [key: string]: Block | Block[] | undefined
}

export class Block<
    ElementType extends HTMLElement = any,
    PropsType extends IComponent = any
> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_RENDER: 'flow:render',
        FLOW_CDU: 'flow:component-did-update',
    }

    eventBus: EventBus

    _baseTmplRender?: IBaseTemplateRender<PropsType>

    _children: IBlockChildren

    _element: ElementType | null = null

    _meta: IBlockMeta

    props: PropsType

    constructor(
        tagName: string,
        props = {} as PropsType,
        children = {} as IBlockChildren,
        baseTmplRender?: IBaseTemplateRender<PropsType>,
    ) {
        this._meta = {
            tagName,
            props,
        }

        this._children = children
        this.props = this._makePropsProxy(props) as PropsType
        this._baseTmplRender = baseTmplRender
        this.eventBus = new EventBus()
        this._registerEvents(this.eventBus)

        this.eventBus.emit(Block.EVENTS.INIT, this.props)
    }

    _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    init(props: PropsType): void {
        this._createResources(props)
        this.eventBus.emit(Block.EVENTS.FLOW_CDM)
    }

    _createResources(props: PropsType): void {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
        if (props.className) {
            const classes = Array.isArray(props.className)
                ? props.className
                : [props.className]

            this._element?.classList.add(...classes)
        }
        this.createResources(props)
    }

    createResources(_props: PropsType): void {}

    _createDocumentElement(tagName: string): ElementType {
        return document.createElement(tagName) as ElementType
    }

    _componentDidMount(): void {
        this.componentDidMount()
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }

    componentDidMount(): void {}

    _componentDidUpdate(oldProps: IStateValue, newProps: IStateValue): void {
        const response = this.componentDidUpdate(oldProps, newProps)

        if (response) this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }

    componentDidUpdate(oldProps: IStateValue, newProps: IStateValue): boolean {
        return !isEqual(oldProps, newProps)
    }

    setProps(nextProps?: PropsType): void {
        if (!nextProps) return

        Object.assign(this.props, nextProps)
    }

    get element(): ElementType | null {
        return this._element
    }

    _render(): void {
        if (!this._element) return

        const block = this.render()
        this._element.innerHTML = block || ''

        Object.keys(this._children).forEach((componentKey) => {
            const components = this._children[componentKey]

            if (!components) return

            const componentsContainer = this._element?.querySelector(`[data-component="${componentKey}"]`)
            const appendTarget = componentsContainer || this._element

            if (Array.isArray(components)) {
                components.map((el) => appendTarget?.appendChild(el.content))
            } else {
                appendTarget?.appendChild(components.content)
            }
        })
    }

    render(): string | void | undefined {
        return this._baseTmplRender?.(this.props)
    }

    get content(): ElementType | null {
        return this.element
    }

    _makePropsProxy(props: IState): IState {
        const self = this

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop]
                return typeof value === 'function' ? value.bind(target) : value
            },
            set(target, prop: string, value: IStateValue) {
                const oldProps: IState = { ...self.props }
                target[prop] = value
                self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target)

                return true
            },
            deleteProperty() {
                throw new Error('Нет доступа')
            },
        })
    }

    hide(): void {
        this._element?.remove()
    }

    show(rootQuery: string): void {
        render(rootQuery, this)
    }
}
