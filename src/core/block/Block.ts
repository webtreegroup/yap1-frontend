import { IComponent, IState, IStateValue } from "../../App.types.js"
import { isEqual, render } from "../../utils/common.utils.js"
import { EventBus } from "./EventBus.js"

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
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update",
    }

    eventBus: EventBus
    
    _baseTmplRender?: IBaseTemplateRender
    _children: IBlockChildren
    _element: ElementType | null = null
    _meta: IBlockMeta
    props: PropsType

    constructor(
        tagName: string, 
        props = {} as PropsType, 
        children = {} as IBlockChildren, 
        baseTmplRender?: IBaseTemplateRender
    ) {
        this._meta = {
            tagName,
            props
        }

        this._children = children
        this.props = this._makePropsProxy(props) as PropsType
        this._baseTmplRender = baseTmplRender
        this.eventBus = new EventBus()
        this._registerEvents(this.eventBus)

        this.eventBus.emit(Block.EVENTS.INIT, this.props)
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    init(props: PropsType) {
        this._createResources(props)
        this.eventBus.emit(Block.EVENTS.FLOW_CDM)
    }

    _createResources(props: PropsType) {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
        if (props.className) this._element?.classList.add(props.className)
        this.createResources(props)
    }

    createResources(_props: PropsType) {}

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName) as ElementType
    }

    _componentDidMount() {
        this.componentDidMount()
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }

    componentDidMount() {}

    _componentDidUpdate(oldProps: IStateValue, newProps: IStateValue) {
        const response = this.componentDidUpdate(oldProps, newProps)
    
        if (response) this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }

    componentDidUpdate(oldProps: IStateValue, newProps: IStateValue) {
        return !isEqual(oldProps, newProps)
    }

    setProps = (nextProps?: PropsType) => {
        if (!nextProps) return

        Object.assign(this.props, nextProps)
    }

    get element() {
        return this._element
    }

    _render() {
        if (!this._element) return

        const block = this.render()
        this._element.innerHTML = block || ''
        
        Object.keys(this._children).map(componentKey => {
            const components = this._children[componentKey]

            if (!components) return
            
            const componentsContainer = this._element?.querySelector(`[data-component="${componentKey}"]`)
            const appendTarget = componentsContainer ? componentsContainer : this._element
            
            if (Array.isArray(components)) {
                components.map(el => appendTarget?.appendChild(el.content))
            } else {
                appendTarget?.appendChild(components.content)
            }
        })
    }

    render(): string | void | undefined {
        return this._baseTmplRender?.(this.props)
    }

    get content() {
        return this.element
    }

    _makePropsProxy(props: IState) {
        const self = this

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop]
                return typeof value === "function" ? value.bind(target) : value
            },
            set(target, prop: string, value: IStateValue) {
                const oldProps: IState = Object.assign({}, self.props)
                target[prop] = value
                self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target)

                return true
            },
            deleteProperty() {
                throw new Error("Нет доступа")
            }
        })
    }

    hide(){
        this._element?.remove()
    }

    show(rootQuery: string){
        render(rootQuery, this)
    }
}