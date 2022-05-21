import { HTTP } from './api'
import { BaseAPI } from './base.api'

export interface ISignup {
    firstName: string
    secondName: string
    login: string
    email: string
    phone: string
    password: string
}

export interface ISignin {
    login: string
    password: string
}

export interface ICurrentUserInfo {
    id: string
    firstName: string
    secondName: string
    login: string
    email: string
    phone: string
    avatar: string
}

export interface IChatUser extends ICurrentUserInfo {
    role: string
}

const authAPIInstance = new HTTP('/auth')

export class AuthAPI extends BaseAPI {
    static signup(data: ISignup): Promise<XMLHttpRequest> {
        return authAPIInstance.post('/signup', { data })
    }

    static signin(data: ISignin): Promise<XMLHttpRequest> {
        return authAPIInstance.post('/signin', { data })
    }

    static logout(): Promise<XMLHttpRequest> {
        return authAPIInstance.get('/logout')
    }
}
