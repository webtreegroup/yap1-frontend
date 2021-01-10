import { HTTP, IResponse } from './api'
import { BaseAPI } from './base.api'

export interface IChangeProfile {
    first_name: string
    second_name: string
    display_name: string
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

    static changeAvatar<T = FormData>(data: T): Promise<IResponse<T>> {
        return profileAPIInstance.put<T>('/profile/avatar', { data })
    }

    static changePassword<T = IChangePassword>(data: T): Promise<IResponse<T>> {
        return profileAPIInstance.put<T>('/password', { data })
    }
}
