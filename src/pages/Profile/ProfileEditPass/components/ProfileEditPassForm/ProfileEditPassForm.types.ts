import { ComponentProps } from 'core/block/Component.types'
import { IChangePassword } from 'core/api'

export interface IProfileEditPass extends ComponentProps {
    onProfilePasswordChange: (request: IChangePassword) => void
}
