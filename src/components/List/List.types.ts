import { IComponent } from '../../App.types'

export interface IListLink {
    path: string
    title: string
}

export interface IList extends IComponent {
    list?: IListLink[]
}
