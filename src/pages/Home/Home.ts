import { IComponent } from 'App.types'
import { Loader } from 'components'
import { Block } from 'core/block'
import { homeTmplRender } from './Home.tmpl'

export class Home extends Block<HTMLDivElement, IComponent> {
    constructor(props: IComponent) {
        super(
            'main',
            { ...props, className: 'index-page' },
            { root: new Loader() },
            homeTmplRender,
        )
    }

    componentDidMount(): void {
        this.props.onLoadComponent?.()
    }
}
