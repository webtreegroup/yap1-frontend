import { IComponent } from 'App.types'

export interface IChats extends IComponent {
    onLoadChats: () => Promise<void>
}
