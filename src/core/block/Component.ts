import { addclassNames, renderComponent } from 'utils'
import { StoreType } from 'App.types'
import { EventBus } from './EventBus'
import isEqual from 'lodash/isEqual'
import { EVENTS } from './Component.config'
import { ComponentProps } from './Component.types'

interface BlockMetaProps {
    tagName: string
    props: StoreType
}

export interface BaseTemplateRenderProps<T = StoreType> {
    (props?: T): string
}

export interface BlockChildrenProps {
    [key: string]: Component | Component[] | undefined
}

export class Component<
    ElementType extends HTMLElement = any,
    PropsType extends ComponentProps = any,
> {
    private _eventBus: EventBus

    private _baseTmplRender?: BaseTemplateRenderProps<PropsType>

    private _documentElement: ElementType | null = null

    private _meta: BlockMetaProps

    public children: BlockChildrenProps

    public props: PropsType

    private _createDocumentElement(tagName: string): ElementType {
        return document.createElement(tagName) as ElementType
    }

    public createResources(props: PropsType): void {}

    private _createResources(props: PropsType): void {
        const { tagName } = this._meta

        this._documentElement = this._createDocumentElement(tagName)

        addclassNames(this._documentElement, props.className)

        this.createResources(props)
    }

    private _init(): void {
        this._createResources(this.props)
        this._eventBus.emit(EVENTS.COMPONENT_DID_MOUNT)
    }

    public componentDidMount(): void {}

    private _componentDidMount(): void {
        this.componentDidMount()
        this._eventBus.emit(EVENTS.COMPONENT_RENDER)
    }

    public componentShouldRender(): string | undefined {
        return this._baseTmplRender?.(this.props)
    }

    private _render(): void {
        if (!this._documentElement) return

        this._documentElement.innerHTML = this.componentShouldRender() || ''

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

        this._eventBus.emit(EVENTS.COMPONENT_DID_UPDATE)
    }

    public componentShouldUpdate(
        oldProps: PropsType,
        newProps: PropsType,
    ): boolean {
        return !isEqual(oldProps, newProps)
    }

    private _componentShouldUpdate(
        oldProps: PropsType,
        newProps: PropsType,
    ): void {
        const response = this.componentShouldUpdate(oldProps, newProps)

        if (response) this._eventBus.emit(EVENTS.COMPONENT_RENDER)
    }

    public componentDidUpdate(): void {}

    private _registerEvents(events: EventBus): void {
        events.on(EVENTS.COMPONENT_INIT, this._init.bind(this))
        events.on(
            EVENTS.COMPONENT_DID_MOUNT,
            this._componentDidMount.bind(this),
        )
        events.on(EVENTS.COMPONENT_RENDER, this._render.bind(this))
        events.on(
            EVENTS.COMPONENT_SHOULD_UPDATE,
            this._componentShouldUpdate.bind(this),
        )
        events.on(
            EVENTS.COMPONENT_DID_UPDATE,
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

                self._eventBus.emit(
                    EVENTS.COMPONENT_SHOULD_UPDATE,
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

    constructor(
        tagName: string,
        props = {} as PropsType,
        children = {} as BlockChildrenProps,
        baseTmplRender?: BaseTemplateRenderProps<PropsType>,
    ) {
        this._meta = {
            tagName,
            props,
        }

        this._baseTmplRender = baseTmplRender
        this._eventBus = new EventBus()

        this._registerEvents(this._eventBus)

        this.children = children

        this.props = this._makePropsProxy(props) as PropsType

        this._eventBus.emit(EVENTS.COMPONENT_INIT)
    }

    public setProps(nextProps?: PropsType): void {
        if (!nextProps) return

        Object.assign(this.props, nextProps)
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
