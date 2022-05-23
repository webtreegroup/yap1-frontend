import './Loader.scss'

import { Block } from 'core/block'
import { store } from 'core/store'
import { loaderTmplRender } from './Loader.tmpl'
import { LoaderProps } from './Loader.types'
import isEqual from 'lodash/isEqual'

export class Loader extends Block<HTMLLinkElement> {
    constructor() {
        super('div', { className: 'loader' })

        store.subscribe(() => {
            this.setProps(store.value.loader)
        }, [])
    }

    componentDidUpdate(oldProps: LoaderProps, newProps: LoaderProps): boolean {
        if (newProps.active) this.element?.classList.add('loader_active')
        else this.element?.classList.remove('loader_active')

        return !isEqual(oldProps, newProps)
    }

    setHtmlTemplate(): string {
        return loaderTmplRender(this.props)
    }
}
