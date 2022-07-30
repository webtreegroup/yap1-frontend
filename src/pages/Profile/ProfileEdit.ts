import { HeaderContainer } from 'components'
import { UsersAPI } from 'core/api'
import { Component } from 'core/block'
import { ComponentProps } from 'core/block/Component'
import { MESSAGES } from 'core/local'
import { Router, ROUTES } from 'core/router'
import { store, SET_CURRENT_USER } from 'core/store'
import { formDataToObj } from 'utils'
import { checkAuth, getCurrentUser } from 'utils/auth.utils'
import { ProfileEditForm } from './components'

interface ProfileProps extends ComponentProps {
    onEdit?: (formData: FormData) => void
}

export class ProfileEdit extends Component<HTMLDivElement, ProfileProps> {
    constructor(props: ProfileProps) {
        const HeaderComponent = new HeaderContainer().createComponent()

        const Form = new ProfileEditForm({
            onSubmit: props.onEdit,
        })

        super(
            'div',
            {
                ...props,
                className: 'Profile',
            },
            {
                HeaderComponent,
                Form,
            },
        )
    }

    public componentDidMount(): void {
        checkAuth().then(() => {
            this.props.onLoadComponent?.()
        })
    }

    public setComponentTemplate(): string {
        return `
            <div data-component="HeaderComponent"></div>

            <div class="container pt-5">
                <h1 class="text-center">${ROUTES.PROFILE.title}</h1>

                <hr />

                <div class="border p-3 mb-3 bg-light" data-component="Form"></div>
            </div>
        `
    }
}

export class ProfileEditContainer {
    onEdit(request: FormData): void {
        console.log('loader on...')

        const body = formDataToObj<any>(request)

        console.log(body)

        UsersAPI.updateUserById(body)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        getCurrentUser()
                        Router.go(ROUTES.PROFILE.path)
                        break
                    default:
                        alert(MESSAGES.PROFILE_CHANGE_FAIL)
                }
            })
            .finally(() => {
                console.log('loader off...')
            })
    }

    createComponent(): ProfileEdit {
        const component = new ProfileEdit({
            onEdit: this.onEdit,
        })

        store.subscribe(
            (state) => {
                const form = component.children.Form as Component

                form?.setProps({
                    initialValues: state.currentUser,
                })
            },
            [SET_CURRENT_USER],
        )

        return component
    }
}
