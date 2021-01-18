import { Loader } from 'components'
import { Block } from 'core/block'
import { homeTmplRender } from './Home.tmpl'
import { IHome } from './Home.types'

export class Home extends Block<HTMLDivElement, IHome> {
    constructor(props: IHome) {
        super(
            'main',
            { ...props, className: 'index-page' },
            { root: new Loader() },
            homeTmplRender,
        )
    }

    componentDidMount(): void {
        this.props.onLoadApp?.()
    }
}
