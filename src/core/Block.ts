import { Store, StoreValue } from "../App.model.js"
import { EventBus } from "./EventBus.js"

interface IBlockMeta {
    tagName: string
    props: Store
}

interface IBaseTemplateRender {
    (props?: Store): string
}

interface IBlockChildren {
    [key: string]: Block | Block[]
}

export class Block<ElementType extends HTMLElement = any> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update",
    }

    eventBus: () => EventBus
    
    _baseTmplRender?: IBaseTemplateRender
    _children?: IBlockChildren | Block[]
    _element: ElementType | null = null
    _meta: IBlockMeta
    props: Store

    constructor(tagName: string, props = {} as Store, children?: IBlockChildren | Block[], baseTmplRender?: IBaseTemplateRender) {
        const eventBus: EventBus = new EventBus()
        this._meta = {
            tagName,
            props
        }

        this._children = children
        this.props = this._makePropsProxy(props)
        this._baseTmplRender = baseTmplRender
        this.eventBus = () => eventBus
        this._registerEvents(eventBus)

        eventBus.emit(Block.EVENTS.INIT, this.props)
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    init(props: Store) {
        this._createResources(props)
        this.eventBus().emit(Block.EVENTS.FLOW_CDM)
    }

    _createResources(props: Store) {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
        if (props.className) this._element?.classList.add(props.className)
        this.createResources(props)
    }

    createResources(_props: Store) {}

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName) as ElementType
    }

    _componentDidMount() {
        this.componentDidMount()
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    componentDidMount() {}

    _componentDidUpdate(oldProps: StoreValue, newProps: StoreValue) {
        const response = this.componentDidUpdate(oldProps, newProps)
    
        if (response) this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    componentDidUpdate(oldProps: StoreValue, newProps: StoreValue) {
        return oldProps !== newProps
    }

    setProps = (nextProps?: Store) => {
        if (!nextProps) return

        Object.assign(this.props, nextProps)
    }

    get element() {
        return this._element
    }

    _render() {
        if (!this._element) return

        const block = this.render()
        this._element.innerHTML = block
        
        if (!this._children) return

        if (!Array.isArray(this._children)) {
            const children = this._children as IBlockChildren
            
            Object.keys(children).map(componentKey => {
                const components = children[componentKey]
                const componentsContainer = this._element?.querySelector(`[data-component="${componentKey}"]`)
                const appendTarget = componentsContainer ? componentsContainer : this._element
                
                if (Array.isArray(components)) {
                    components.map(el => appendTarget?.appendChild(el.getContent()))
                } else {
                    appendTarget?.appendChild(components.getContent())
                }
            })
        } else {
            const componentContainer = this._element.querySelector('[data-component="children"]')
            const appendTarget = componentContainer ? componentContainer : this._element
    
            const children = this._children.map(el => el.getContent())

            children.forEach(el => {
                appendTarget.appendChild(el)
            })
        }
    }

    render() {
        return this._baseTmplRender?.(this.props) || ''
    }

    getContent() {
        return this.element
    }

    _makePropsProxy(props: Store) {
        const self = this

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop]
                return typeof value === "function" ? value.bind(target) : value
            },
            set(target, prop: string, value: StoreValue) {
                const oldProps: Store = Object.assign({}, self.props)
                target[prop] = value
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps[prop], value)

                return true
            },
            deleteProperty() {
                throw new Error("Нет доступа")
            }
        })
    }
}