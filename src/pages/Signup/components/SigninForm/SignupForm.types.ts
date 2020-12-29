import { ISignup } from "../../../../core/api/auth.api.js"

export interface ISignupForm {
    onSignup?: (request: ISignup) => void
}