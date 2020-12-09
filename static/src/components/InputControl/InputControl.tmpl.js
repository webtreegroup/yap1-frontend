export const inputControlTmplRender = ({ inputType = 'text', name, value = '', disabled, label, isTouched }) => `
    <input class="${isTouched ? 'touched' : ''}" type="${inputType}" name="${name}" id="${name}" value="${value}" ${disabled ? 'disabled' : ''}>
    <label for="${name}">${label}</label>
`;
