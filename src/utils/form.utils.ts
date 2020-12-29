export interface IValidationFn {
    (value?: string): boolean
}

export function checkAllowedLengthAndTypeChar(value?: string) {
    if (!value) return false

    const regexp = new RegExp(/^((?!\s).){3,20}$/)

    return regexp.test(value)
}

export function checkPhoneNumber(value?: string) {
    if (!value) return false

    const regexp = new RegExp(/^\d{7,11}$/)

    return regexp.test(value)
}

export function checkEmail(value?: string) {
    if (!value) return false

    const regexp = new RegExp(/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/)

    return regexp.test(value)
}