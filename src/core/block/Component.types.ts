export interface ComponentProps {
    className?: string | string[]
    children?: string | number | HTMLElement
    onLoadComponent?: () => Promise<void>
}
