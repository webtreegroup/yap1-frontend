import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

export interface IChangeProfile {
    firstName: string
    secondName: string
    login: string
    email: string
    phone: string
}

export interface IChangeProfileAvatar {
    file: Blob
}

export interface IChangePassword {
    oldPassword: string
    newPassword: string
}

const profileAPIInstance = new HTTP('/user')

export class ProfileAPI extends BaseAPI {
    static change<T = IChangeProfile>(data: T): Promise<IResponse<T>> {
        return profileAPIInstance.put<T>('/profile', { data })
    }

    static changePassword<T = IChangePassword>(data: T): Promise<IResponse<T>> {
        return profileAPIInstance.put<T>('/password', { data })
    }
}
