import { Link } from 'components'
import { Component } from 'core/block'
import { ROUTES } from 'core/router'
import { errorTmplRender } from './Error.tmpl'

export class ErrorPage extends Component<HTMLDivElement> {
    constructor() {
        const link = new Link(ROUTES.HOME)

        super(
            'main',
            { className: 'error-page' },
            { root: [link] },
            errorTmplRender,
        )
    }
}
