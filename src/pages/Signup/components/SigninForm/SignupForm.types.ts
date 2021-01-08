import { ISignup } from "../../../../core/api/auth.api"

export interface ISignupForm {
    onSignup?: (request: ISignup) => void
}