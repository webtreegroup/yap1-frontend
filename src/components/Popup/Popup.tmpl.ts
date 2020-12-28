import { IPopup } from "./Popup.types.js"

export const popupTmplRender = ({
    title,
    counter
}: IPopup): string => {
    return `
        <div class="popup">
            <h3 class="popup__title">${ title } - ${ counter }</h3>
            <div class="popup__body" data-component="children"></div>
        </div>
    `
}