export const inputControlTmplRender = ({ inputType = 'text', name, value = '', disabled, label, isTouched, required }) => `
    <input class="${isTouched ? 'touched' : ''}" type="${inputType}" name="${name}" id="${name}" value="${value}" ${disabled ? 'disabled' : ''} ${required ? 'required' : ''}>
    <label for="${name}">${label}</label>
`;
//# sourceMappingURL=InputControl.tmpl.js.map