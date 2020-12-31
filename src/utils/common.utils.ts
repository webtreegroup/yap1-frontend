import { IState } from "../App.types"
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

export function isEqual(firstArg?: IState, secondArg?: IState): boolean {
    if (firstArg === null 
        || firstArg === undefined 
        || secondArg === null 
        || secondArg === undefined) return firstArg === secondArg
    if (firstArg.constructor !== secondArg.constructor) return false
    if (firstArg instanceof Function) return firstArg === secondArg
    if (firstArg instanceof RegExp) return firstArg === secondArg
    if (firstArg === secondArg 
        || firstArg.valueOf() === secondArg.valueOf()) return true
    if (Array.isArray(firstArg) 
        && firstArg.length !== secondArg.length) return false
    if (firstArg instanceof Date) return false
    if (!(firstArg instanceof Object)) return false
    if (!(secondArg instanceof Object)) return false

    const firstObjectKeys = Object.keys(firstArg)
    const secondObjectKeys = Object.keys(secondArg)

    return secondObjectKeys.every(function (i) { return firstObjectKeys.indexOf(i) !== -1 }) &&
        firstObjectKeys.every(function (i) { 
            const firstSubObject = <IState>firstArg
            const secondSubObject = <IState>secondArg
            return isEqual(firstSubObject[i], secondSubObject[i]) 
        })
}