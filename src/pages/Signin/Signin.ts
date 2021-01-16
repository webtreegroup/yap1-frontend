import { Loader, Popup } from 'components'
import { Block } from 'core/block'
import { ROUTES } from 'core/router'
import { SigninFormContainer } from './components/SigninForm/SigninFormContainer'

export class Signin extends Block<HTMLDivElement> {
    constructor() {
        const SigninForm = new SigninFormContainer()

        const SigninPopup = new Popup({
            title: ROUTES.SIGNIN.title,
            isActive: true,
        }, {
            root: [SigninForm.createBlock()],
        })

        super(
            'main',
            { className: 'signin-page' },
            {
                root: [SigninPopup, new Loader()],
            },
        )
    }
}
