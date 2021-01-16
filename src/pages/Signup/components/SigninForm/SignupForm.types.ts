import { ISignup } from 'core/api'

export interface ISignupForm {
    onSignup?: (request: ISignup) => void
}
