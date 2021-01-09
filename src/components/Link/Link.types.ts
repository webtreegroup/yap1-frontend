import { IComponent } from '../../App.types'

export interface ILink extends IComponent {
    title?: string
    path?: string
    onClick?: () => void
}
