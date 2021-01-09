import './Loader.scss'

import { Block } from '../../core/block/Block'
import { loaderTmplRender } from './Loader.tmpl'
import { store } from '../../core/store/store'
import { ILoader } from './Loader.types'
import { isEqual } from '../../utils/common.utils'

export class Loader extends Block<HTMLLinkElement> {
    constructor() {
        super(
            'div',
            { className: 'loader' },
        )

        store.subscribe(() => {
            this.setProps(store.value.loader)
        })
    }

    componentDidUpdate(oldProps: ILoader, newProps: ILoader): boolean {
        if (newProps.active) this._element?.classList.add('loader_active')
        else this._element?.classList.remove('loader_active')

        return !isEqual(oldProps, newProps)
    }

    render(): string {
        return loaderTmplRender(this.props)
    }
}
