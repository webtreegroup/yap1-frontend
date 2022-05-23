import { ComponentProps } from 'core/block/Component.types'
import { Loader } from 'components'
import { Component } from 'core/block'
import { homeTmplRender } from './Home.tmpl'

export class Home extends Component<HTMLDivElement, ComponentProps> {
    constructor(props: ComponentProps) {
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
