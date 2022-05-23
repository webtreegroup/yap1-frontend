import { Component } from 'core/block'
import { ListProps } from './List.types'
import { Link } from '../Link/Link'

export class List extends Component<HTMLUListElement> {
    constructor(props: ListProps) {
        const mappedLinks = props.list?.map((route) => {
            const link = new Link(route)

            const result = new Component('li', {}, { root: [link] })

            return result
        })

        super('ul', props, { root: mappedLinks })
    }
}
