import { addClassNames, removeClassNames, renderComponent } from 'utils'
import { StoreType } from 'App.types'
import { EventBus } from './EventBus'
import isEqual from 'lodash/isEqual'
import { EVENTS } from './Component.config'

export interface ComponentProps {
    className?: string | string[]
    onLoadComponent?: () => Promise<void>
}

interface ComponentMetaProps {
    tagName: string
    props: StoreType
}

export interface BaseTemplateRenderProps<T = StoreType> {
    (props?: T): string
}

export interface ComponentChildrenProps {
    [key: string]: Component | Component[] | undefined
}

export class Component<
    ElementType extends HTMLElement = any,
    PropsType extends ComponentProps = any,
    StateType extends {} = {},
> {
    private _baseTmplRender?: BaseTemplateRenderProps<PropsType>

    private _documentElement: ElementType | null = null

    private _meta: ComponentMetaProps

    public events = EVENTS

    public eventBus: EventBus

    public children: ComponentChildrenProps

    public props: PropsType

    public state = {} as StateType

    constructor(
        tagName: string,
        props = {} as PropsType,
        children = {} as ComponentChildrenProps,
        baseTmplRender?: BaseTemplateRenderProps<PropsType>,
    ) {
        this._meta = {
            tagName,
            props,
        }

        this._baseTmplRender = baseTmplRender
        this.eventBus = new EventBus()

        this._registerEvents(this.eventBus)

        this.children = children

        this.props = this._makePropsProxy(props) as PropsType
        this.state = this._makePropsProxy(this.state) as StateType

        this.eventBus.emit(this.events.COMPONENT_INIT)
    }

    public createResources(
        _props: PropsType,
        _documentElement: ElementType | null,
    ): void {}

    private _createResources(): void {
        const { tagName } = this._meta

        const element = document.createElement(tagName) as ElementType

        this._documentElement = element

        this.addClass(this.props.className)

        this.createResources(this.props, element)
    }

    public addClass(className?: string | string[]): void {
        addClassNames(this._documentElement, className)
    }

    public removeClass(className?: string | string[]): void {
        removeClassNames(this._documentElement, className)
    }

    private _init(): void {
        this._createResources()
        this.eventBus.emit(this.events.COMPONENT_DID_MOUNT)
    }

    public componentDidMount(
        _props: PropsType,
        _documentElement: ElementType | null,
    ): void {}

    private _componentDidMount(): void {
        this.componentDidMount(this.props, this._documentElement)
        this.eventBus.emit(this.events.COMPONENT_RENDER)
    }

    public setComponentTemplate(
        props?: PropsType,
        _documentElement?: ElementType | null,
    ): string {
        if (!props) return ''

        return this._baseTmplRender?.(props) || ''
    }

    private _render(): void {
        if (!this._documentElement) return

        this._documentElement.innerHTML = this.setComponentTemplate(this.props)

        Object.keys(this.children).forEach((componentKey) => {
            const childComponents = this.children[componentKey]

            if (!childComponents) return

            const componentsContainer = this._documentElement?.querySelector(
                `[data-component="${componentKey}"]`,
            )
            const appendTarget = componentsContainer || this._documentElement

            if (Array.isArray(childComponents)) {
                childComponents.map((component) =>
                    appendTarget?.appendChild(component.element),
                )
            } else {
                appendTarget?.appendChild(childComponents.element)
            }
        })

        this.eventBus.emit(this.events.COMPONENT_DID_UPDATE)
    }

    public componentShouldUpdate(
        oldProps: PropsType,
        newProps: PropsType,
        _documentElement?: ElementType | null,
    ): boolean {
        return !isEqual(oldProps, newProps)
    }

    private _componentShouldUpdate(
        oldProps: PropsType,
        newProps: PropsType,
    ): void {
        const response = this.componentShouldUpdate(
            oldProps,
            newProps,
            this._documentElement,
        )

        if (response) this.eventBus.emit(this.events.COMPONENT_RENDER)
    }

    public componentDidUpdate(
        _props?: PropsType,
        _documentElement?: ElementType | null,
    ): void {}

    private _registerEvents(events: EventBus): void {
        events.on(this.events.COMPONENT_INIT, this._init.bind(this))
        events.on(
            this.events.COMPONENT_DID_MOUNT,
            this._componentDidMount.bind(this),
        )
        events.on(this.events.COMPONENT_RENDER, this._render.bind(this))
        events.on(
            this.events.COMPONENT_SHOULD_UPDATE,
            this._componentShouldUpdate.bind(this),
        )
        events.on(
            this.events.COMPONENT_DID_UPDATE,
            this.componentDidUpdate.bind(this),
        )
    }

    _makePropsProxy(props: StoreType): StoreType {
        const self = this

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop]
                return typeof value === 'function' ? value.bind(target) : value
            },
            set(target, prop: string, value: any) {
                const oldProps: StoreType = { ...self.props }

                target[prop] = value

                self.eventBus.emit(
                    self.events.COMPONENT_SHOULD_UPDATE,
                    oldProps,
                    target,
                )

                return true
            },
            deleteProperty() {
                throw new Error('Нет доступа')
            },
        })
    }

    public setProps(nextProps?: PropsType): void {
        if (!nextProps) return

        Object.assign(this.props, nextProps)
    }

    public setState(nextState?: StateType): void {
        Object.assign(this.state, nextState)
    }

    public get element(): ElementType | null {
        return this._documentElement
    }

    public hide(): void {
        this._documentElement?.remove()
    }

    public show(parentNode: string): void {
        renderComponent(this, parentNode)
    }
}
