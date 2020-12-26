import { Block } from "../../core/Block.js"
import { IList } from "./List.types.js"
import { Link } from "../Link/Link.js"

export class List extends Block<HTMLUListElement> {
    constructor(props: IList) {
        const mappedLinks = props.list?.map(el => {
            const link = new Link({ 
                text: el.title,
                href: el.path
            })

            const result = new Block('li', {}, [link])

            return result 
        })

        super(
            "ul", 
            props,
            mappedLinks
        )
    }
}
