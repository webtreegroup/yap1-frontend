import { Store } from "../App.types"
import { Block } from "../core/Block"

export function render(query: string | HTMLElement | null, block: Block) {
    const appendBlock = block.content

    if (!appendBlock) return

    if (typeof query === 'string') {
        const root = document.querySelector(query)

        return root?.appendChild(appendBlock)
    }
    
    return query?.appendChild(appendBlock)
}

export function classNames(classes: (string | undefined)[]) {
    return classes.filter(Boolean) as string[]
}

export function isEqual(firstObject?: Store, secondObject?: Store): boolean {
    if (firstObject === null 
        || firstObject === undefined 
        || secondObject === null 
        || secondObject === undefined) return firstObject === secondObject
    if (firstObject.constructor !== secondObject.constructor) return false
    if (firstObject instanceof Function) return firstObject === secondObject
    if (firstObject instanceof RegExp) return firstObject === secondObject
    if (firstObject === secondObject 
        || firstObject.valueOf() === secondObject.valueOf()) return true
    if (Array.isArray(firstObject) 
        && firstObject.length !== secondObject.length) return false
    if (firstObject instanceof Date) return false
    if (!(firstObject instanceof Object)) return false
    if (!(secondObject instanceof Object)) return false

    const firstObjectKeys = Object.keys(firstObject)
    const secondObjectKeys = Object.keys(secondObject)

    return secondObjectKeys.every(function (i) { return firstObjectKeys.indexOf(i) !== -1 }) &&
        firstObjectKeys.every(function (i) { 
            const firstSubObject = <Store>firstObject
            const secondSubObject = <Store>secondObject
            return isEqual(firstSubObject[i], secondSubObject[i]) 
        })
}