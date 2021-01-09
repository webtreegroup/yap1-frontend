import { IComponent } from '../../../../../App.types';

export interface IEditUserImageForm extends IComponent {
    onUserImageChange: (request: FormData) => void
}
