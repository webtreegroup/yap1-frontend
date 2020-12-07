import { Store, StoreValue } from "./App.model"
import { EventBus } from "./event-bus.js"

interface IBlockMeta {
    tagName: string
    props: Store
}

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update",
    }

    eventBus: () => EventBus
    
    _element: HTMLElement | null = null
    _meta: IBlockMeta
    props: Store

    constructor(tagName: string, props: Store) {
        const eventBus: EventBus = new EventBus()
        this._meta = {
            tagName,
            props
        }

        this.props = this._makePropsProxy(props)

        this.eventBus = () => eventBus

        this._registerEvents(eventBus)
        eventBus.emit(Block.EVENTS.INIT)
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    _createResources() {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
    }

    init() {
        this._createResources()
        this.eventBus().emit(Block.EVENTS.FLOW_CDM)
    }

    _componentDidMount() {
        this.componentDidMount(this.props)
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }

    componentDidMount(oldProps: Store) {
        if (!this._element) return
        this._element.innerText = oldProps.text ? String(oldProps.text) : ''
    }

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
    }

    render() {
        return ''
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

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName)
    }
}