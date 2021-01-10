import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

export interface ISignup {
    first_name: string
    second_name: string
    login: string
    email: string
    password: string
    phone: string
}

export interface ISignin {
    login: string
    password: string
}

export interface ICurrentUserInfo {
    id: number
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
    avatar: string
}

const authAPIInstance = new HTTP('/auth')

export class AuthAPI extends BaseAPI {
    static signup(data: ISignup): Promise<XMLHttpRequest> {
        return authAPIInstance.post('/signup', { data })
    }

    static signin(data: ISignin): Promise<XMLHttpRequest> {
        return authAPIInstance.post('/signin', { data })
    }

    static getCurrentUserInfo(): Promise<IResponse<string>> {
        return authAPIInstance.get<string>('/user')
    }

    static logout(): Promise<XMLHttpRequest> {
        return authAPIInstance.post('/logout')
    }
}
