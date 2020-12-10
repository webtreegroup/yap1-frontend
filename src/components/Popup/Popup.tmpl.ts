import { IPopup } from "./Popup.types.js"

export const popupTmplRender = ({
    title,
}: IPopup): string => {
    return `
        <div class="popup">
            <h3 class="popup__title">${ title }</h3>
            <div class="popup__body" data-component="children"></div>
        </div>
    `
}