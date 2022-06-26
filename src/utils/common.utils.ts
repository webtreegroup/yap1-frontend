import { StoreType, ValidateResultProps } from 'App.types'
import { FIELDS_DICTIONARY, VALIDATION_FAILED_MESSAGE } from 'core/api'
import { Component } from 'core/block'

export function escapeHtml(value: FormDataEntryValue): FormDataEntryValue {
    if (typeof value !== 'string') return value

    const entityMap: StoreType<string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;',
    }

    return value.replace(/[&<>"'`=/]/g, (char: string) => entityMap[char])
}

export function getArrLastEl<T>(arr: T[]): T {
    return arr[arr.length - 1]
}

export function renderComponent(
    component: Component,
    parentNode?: string | HTMLElement,
): undefined | void {
    const { element } = component

    if (!element) return

    if (typeof parentNode === 'string') {
        const root = document.querySelector(parentNode)

        root?.appendChild(element)

        return
    }

    parentNode?.appendChild(element)
}

export function classNames(classes: (string | undefined)[]): string[] {
    return classes.filter(Boolean) as string[]
}

export function getUrlParam(paramKey: string): string | null {
    const url = new URL(document.location.href)
    const paramValue = url.searchParams.get(paramKey)

    return paramValue
}

export function addClassNames(
    element?: HTMLElement | null,
    className?: string | string[],
): void | undefined {
    if (!element || !className) return

    const classes = Array.isArray(className) ? className : [className]

    element?.classList.add(...classes)
}

export function removeClassNames(
    element?: HTMLElement | null,
    className?: string | string[],
): void | undefined {
    if (!element || !className) return

    const classes = Array.isArray(className) ? className : [className]

    element?.classList.remove(...classes)
}

export function formDataToObj<T extends object>(formData: FormData): T {
    const form: { [key: string]: any } = {}

    for (const pair of formData.entries()) {
        const [key, value] = pair

        form[key] = value
    }

    return form as T
}

export function getValidationMessage(response: string): string {
    const result: ValidateResultProps = JSON.parse(response)

    return `${VALIDATION_FAILED_MESSAGE}: ${result.fields
        .map((el) => FIELDS_DICTIONARY[el])
        .join(', ')}.`
}
