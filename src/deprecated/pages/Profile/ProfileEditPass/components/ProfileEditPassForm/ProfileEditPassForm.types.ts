import { ComponentProps } from 'core/block/Component'
import { IChangePassword } from 'core/api'

export interface IProfileEditPass extends ComponentProps {
    onProfilePasswordChange: (request: IChangePassword) => void
}
