import { ComponentProps } from 'core/block/Component'
import { IChangeProfile } from 'core/api'

export interface ProfileEditFormProps extends ComponentProps {
    onProfileChange?: (request: IChangeProfile) => void
}
