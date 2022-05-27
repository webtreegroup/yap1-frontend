import { Component } from 'core/block'
import { Link } from 'components'
import { ROUTES } from 'core/router'
import { ComponentProps } from 'core/block/Component'
import { UserContract } from 'core/api'

export interface UsersItemProps extends ComponentProps, UserContract {}

export class UsersItem extends Component<HTMLDivElement, UsersItemProps> {
    constructor(props: UsersItemProps) {
        const UserSingleLink = new Link({
            path: `${ROUTES.USERS.path}/?userId=${props.id}`,
            title: props.login,
        })

        super(
            'li',
            { ...props, className: 'list-group-item' },
            {
                UserSingleLink,
            },
        )
    }
}
