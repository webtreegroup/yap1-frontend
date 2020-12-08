export const formTmplRender = ({ children = '' }) => {
    return `
        <div class="children-node-target">
            ${children}
        </div>
    `;
};
