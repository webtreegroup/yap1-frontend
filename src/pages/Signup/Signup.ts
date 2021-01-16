import { Loader, Popup } from 'components'
import { Block } from 'core/block'
import { SignupFormContainer } from './components/SigninForm/SignupFormContainer'

export class Signup extends Block<HTMLDivElement> {
    constructor() {
        const SignupForm = new SignupFormContainer()

        const SignupPopup = new Popup({
            title: 'Регистрация',
            isActive: true,
        }, {
            root: [SignupForm.createBlock()],
        })

        super(
            'main',
            { className: 'signup-page' },
            {
                root: [SignupPopup, new Loader()],
            },
        )
    }
}
