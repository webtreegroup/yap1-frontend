import './Loader.scss'

import { Block } from 'core/block'
import { store } from 'core/store'
import { isEqual } from 'utils'
import { loaderTmplRender } from './Loader.tmpl'
import { LoaderProps } from './Loader.types'

export class Loader extends Block<HTMLLinkElement> {
    constructor() {
        super('div', { className: 'loader' })

        store.subscribe(() => {
            this.setProps(store.value.loader)
        }, [])
    }

    componentDidUpdate(oldProps: LoaderProps, newProps: LoaderProps): boolean {
        if (newProps.active) this._element?.classList.add('loader_active')
        else this._element?.classList.remove('loader_active')

        return !isEqual(oldProps, newProps)
    }

    render(): string {
        return loaderTmplRender(this.props)
    }
}
