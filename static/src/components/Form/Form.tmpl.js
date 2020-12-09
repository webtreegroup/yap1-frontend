export const formTmplRender = ({ children = '' }) => {
    return `
        <div data-component="children">
            ${children}
        </div>
    `;
};
