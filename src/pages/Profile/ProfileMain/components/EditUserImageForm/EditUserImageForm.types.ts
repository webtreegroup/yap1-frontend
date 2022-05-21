import { ComponentProps } from 'App.types'

export interface IEditUserImageForm extends ComponentProps {
    onUserImageChange: (request: FormData) => void
}
