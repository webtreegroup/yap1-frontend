import { ISignin } from '../../../../core/api/auth.api'

export interface ISigninForm {
    onSignin?: (request: ISignin) => void
}
