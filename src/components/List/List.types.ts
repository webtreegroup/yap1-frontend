import { IComponent } from "../../App.types.js"

export interface IListLink {
    path: string
    title: string
}

export interface IList extends IComponent {
    list?: IListLink[]
}