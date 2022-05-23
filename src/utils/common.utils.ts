import { StoreType } from 'App.types'
import { Block } from 'core/block'

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
    component: Block,
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
