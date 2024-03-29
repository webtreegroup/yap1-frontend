import { StoreType } from 'App.types'
import { Component } from '../block/Component'
import { ComponentConstructorProps } from './Router'

export class Route {
    _pathname: string

    _component: ComponentConstructorProps

    _componentInstance: Component | null

    props: StoreType

    constructor(
        pathname: string,
        component: ComponentConstructorProps,
        props: StoreType,
    ) {
        this._pathname = pathname
        this._component = component
        this._componentInstance = null
        this.props = props
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
        const componentInstance = new this._component()

        this._componentInstance =
            componentInstance && 'createComponent' in componentInstance
                ? componentInstance.createComponent()
                : componentInstance

        this._componentInstance?.show(this.props.rootQuery)
    }
}
