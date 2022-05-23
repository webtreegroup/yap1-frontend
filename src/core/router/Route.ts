import { StoreType } from 'App.types'
import { Block } from '../block/Block'
import { ComponentConstructorProps } from './Router'

export class Route {
    _pathname: string

    _component: ComponentConstructorProps

    _componentInstance: Block | null

    _props: StoreType

    constructor(
        pathname: string,
        component: ComponentConstructorProps,
        props: StoreType,
    ) {
        this._pathname = pathname
        this._component = component
        this._componentInstance = null
        this._props = props
    }

    get pathname(): string {
        return this._pathname
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname
            this.render()
        }
    }

    leave(): void {
        this._componentInstance?.hide()
    }

    match(pathname: string): boolean {
        return pathname === this._pathname
    }

    render(): void {
        if (!this._componentInstance) {
            const instance = new this._component()

            this._componentInstance =
                instance && 'createBlock' in instance
                    ? instance.createBlock()
                    : instance
        }

        this._componentInstance?.show(this._props.rootQuery)
    }
}
