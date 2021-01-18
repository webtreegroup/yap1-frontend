import { IComponent } from 'App.types'

export interface IHome extends IComponent {
    onLoadApp?: () => Promise<void>
}
