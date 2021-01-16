import { IState } from 'App.types'
import { Block } from '../block/Block'
import { IBlockConstructor } from './Router'

export class Route {
    _pathname: string

    _blockClass: IBlockConstructor

    _block: Block | null

    _props: IState

    constructor(pathname: string, view: IBlockConstructor, props: IState) {
        this._pathname = pathname
        this._blockClass = view
        this._block = null
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
        this._block?.hide()
    }

    match(pathname: string): boolean {
        return pathname === this._pathname
    }

    render(): void {
        if (!this._block) {
            const instance = new this._blockClass()
            this._block = instance && 'createBlock' in instance
                ? instance.createBlock()
                : instance
        }

        this._block?.show(this._props.rootQuery)
    }
}
