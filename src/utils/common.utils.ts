import { IState } from '../App.types'
import { Block } from "../core/block/Block"

interface IEntityMap {
    [key: string]: string
}

export function escapeHtml (value: FormDataEntryValue): FormDataEntryValue {
    if (typeof value !== 'string') return value

    const entityMap: IEntityMap = {
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

export function getArrLastEl<T>(arr: T[]): T{
    return arr[arr.length - 1]
}

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

// TODO: оно не нада
type Nullable<T> = T | null;

const TYPE_ERROR = 'Something wrong with type of input param';

export function tree (lvl: number | string): Nullable<string> {
  if (typeof lvl !== 'number' && typeof lvl !== 'string') throw new Error(TYPE_ERROR)
  if (isNaN(+lvl)) throw new Error(TYPE_ERROR)
  if (+lvl < 3) return null
  
  let result = ''
  let tree = ''
  let space = ''

  for (let j = 0; j < +lvl - 2; j++){
    space += ' '
  }

  for(let i = 0; i < +lvl; i++){
    if (!i) tree += '*'
    else if (i === +lvl - 1) {
        const spaces = new Array(+lvl - 2).fill(' ').join('')
        tree = `${spaces}|${spaces}`
    }
    else tree += '**'
    
    result += `${space}${tree}${space}\n`
    
    space = space.substring(0, space.length - 1)
  }

  return result
}

// omit({ name: 'Benjy', age: 18 }, [ 'name' ]); // => { age: 18 }

// omit(obj: Object, fields: string[]): Object
function omit<T extends object>(obj: T, fields: (keyof T)[]) {
    const arr = Object.entries(obj)
    const filtered = arr.filter(([key]) => !fields.includes(key as keyof T))

    return Object.fromEntries(filtered)
}

omit({ 
    prop1: 1, 
    prop2: 2, 
    prop3: 3, 
    prop4: 4, 
}, [
    'prop2',
    'prop4'
])