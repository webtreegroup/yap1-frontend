import { EventBus } from "./EventBus.js";
export class Block {
    constructor(tagName, props = {}, children) {
        this._element = null;
        this.setProps = (nextProps) => {
            if (!nextProps)
                return;
            Object.assign(this.props, nextProps);
        };
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
        this._children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT, this.props);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    init(props) {
        this._createResources(props);
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _createResources(props) {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
        this.createResources(props);
    }
    createResources(_props) { }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidMount() { }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response)
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidUpdate(oldProps, newProps) {
        return oldProps !== newProps;
    }
    get element() {
        return this._element;
    }
    _render() {
        if (!this._element)
            return;
        const block = this.render(typeof this._children === 'string' ? this._children : undefined);
        this._element.innerHTML = block;
        const childrenContainer = this._element.querySelector('.children-node-target');
        if (typeof this._children !== 'string' && this._children && childrenContainer) {
            const children = this._children.map(el => el.getContent());
            children.forEach(el => {
                childrenContainer.appendChild(el);
            });
        }
    }
    render(_children) {
        return '';
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldProps = Object.assign({}, self.props);
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps[prop], value);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
};