import { Loader, Popup } from 'components'
import { Component } from 'core/block'
import { ROUTES } from 'core/router'
import { SigninFormContainer } from './components/SigninForm/SigninFormContainer'

export class Signin extends Component<HTMLDivElement> {
    constructor() {
        const SigninForm = new SigninFormContainer()

        const SigninPopup = new Popup(
            {
                title: ROUTES.SIGNIN.title,
                isActive: true,
            },
            {
                root: [SigninForm.createBlock()],
            },
        )

        super(
            'main',
            { className: 'signin-page' },
            {
                root: [SigninPopup, new Loader()],
            },
        )
    }
}
