import { ComponentProps } from 'core/block/Component.types'
import { IChangeProfile } from 'core/api'

export interface ProfileEditFormProps extends ComponentProps {
    onProfileChange?: (request: IChangeProfile) => void
}
