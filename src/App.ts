// TODO: пока буду использовать под utils общего назначения

export function classNames(classes: (string | undefined)[]) {
    return classes.filter(Boolean) as string[]
}