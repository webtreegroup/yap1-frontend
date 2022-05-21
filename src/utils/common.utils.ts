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

export function render(
    query: string | HTMLElement | null,
    block: Block,
): undefined | void {
    const appendBlock = block.content

    if (!appendBlock) return

    if (typeof query === 'string') {
        const root = document.querySelector(query)

        root?.appendChild(appendBlock)

        return
    }

    query?.appendChild(appendBlock)
}

export function classNames(classes: (string | undefined)[]): string[] {
    return classes.filter(Boolean) as string[]
}

export function isEqual(firstArg?: StoreType, secondArg?: StoreType): boolean {
    if (
        firstArg === null ||
        firstArg === undefined ||
        secondArg === null ||
        secondArg === undefined
    ) {
        return firstArg === secondArg
    }
    if (firstArg.constructor !== secondArg.constructor) return false
    if (firstArg instanceof Function) return firstArg === secondArg
    if (firstArg instanceof RegExp) return firstArg === secondArg
    if (firstArg === secondArg || firstArg.valueOf() === secondArg.valueOf()) {
        return true
    }
    if (Array.isArray(firstArg) && firstArg.length !== secondArg.length) {
        return false
    }
    if (firstArg instanceof Date) return false
    if (!(firstArg instanceof Object)) return false
    if (!(secondArg instanceof Object)) return false

    const firstObjectKeys = Object.keys(firstArg)
    const secondObjectKeys = Object.keys(secondArg)

    return (
        secondObjectKeys.every((i) => firstObjectKeys.indexOf(i) !== -1) &&
        firstObjectKeys.every((i) => {
            const firstSubObject = <StoreType>firstArg
            const secondSubObject = <StoreType>secondArg
            return isEqual(firstSubObject[i], secondSubObject[i])
        })
    )
}

export function getUrlParam(paramKey: string): string | null {
    const url = new URL(document.location.href)
    const paramValue = url.searchParams.get(paramKey)

    return paramValue
}
