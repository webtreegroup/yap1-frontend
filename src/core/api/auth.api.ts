import { HTTP } from './api'
import { BaseAPI } from './base.api'

export interface SignUpContract {
    firstName: string
    secondName: string
    login: string
    email: string
    phone: string
    password: string
    passwordConfirm: string
}

export interface SignInContract {
    login: string
    password: string
}

export interface UserContract {
    id: string
    firstName: string
    secondName: string
    login: string
    email: string
    phone: string
}

const authAPIInstance = new HTTP('/auth')

export class AuthAPI extends BaseAPI {
    static signup(data: SignUpContract): Promise<XMLHttpRequest> {
        return authAPIInstance.post('/signup', { data })
    }

    static signin(data: SignInContract): Promise<XMLHttpRequest> {
        return authAPIInstance.post('/signin', { data })
    }

    static logout(): Promise<XMLHttpRequest> {
        return authAPIInstance.get('/logout')
    }
}
