export interface IValidationFn {
    (value?: string): boolean
}

export function checkLoginLength(value?: string) {
    if (!value) return false

    const regexp = new RegExp(/^[a-zA-Z]{3,}$/)

    return regexp.test(value)
}