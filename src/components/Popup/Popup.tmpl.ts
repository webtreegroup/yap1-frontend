import { PopupProps } from './Popup.types'

export const popupTmplRender = ({ title }: PopupProps): string => `
        <div class="popup">
            <h3 class="popup__title">${title}</h3>
            <div class="popup__body" data-component="root"></div>
        </div>
    `
