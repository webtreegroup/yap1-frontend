import chai from 'chai';
import { escapeHtml, getArrLastEl } from "./common.utils.js";
const { assert } = chai;
describe("Сommon utils usage suite", () => {
    it("Should return last element of array", () => {
        assert.equal(getArrLastEl([1, 5, 6, 2]), 2);
    });
    it("Should escape HTML, return string protected from XSS", () => {
        assert.equal(escapeHtml('I = love js&ts'), 'I &#x3D; love js&amp;ts');
    });
});
//# sourceMappingURL=common.utils.spec.js.map