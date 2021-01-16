import { ISignin } from 'core/api'

export interface ISigninForm {
    onSignin?: (request: ISignin) => void
}
