export const popupTmplRender = ({ title, }) => {
    return `
        <div class="popup">
            <h3 class="popup__title">${title}</h3>
            <div class="popup__body" data-component="children"></div>
        </div>
    `;
};
