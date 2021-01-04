import { ISignin } from "../../../../core/api/auth.api.js"

export interface ISigninForm {
    onSignin?: (request: ISignin) => void
}