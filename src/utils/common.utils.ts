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