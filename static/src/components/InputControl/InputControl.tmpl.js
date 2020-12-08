export const inputControlTmpl = `
    <div class="input-control {{ className }}">
        <input type="{{ type }}" name="{{ name }}" id="{{ name }}" value="{{ value }}" disabled="{{ disabled }}">
        <label for="{{ name }}">{{ label }}</label>
    </div>
`;
