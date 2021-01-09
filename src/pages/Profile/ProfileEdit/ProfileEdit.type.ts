import { IComponent } from '../../../App.types';

export interface IProfileEdit extends IComponent {
    onLoadProfile: () => Promise<void>
}
