import chai from 'chai';
import { getArrLastEl } from "./common.utils.js";
const { assert } = chai;
describe("Сommon utils usage suite", () => {
    const arr = [1, 5, 6, 2];
    it("Should return last element of array", () => {
        assert.equal(getArrLastEl(arr), 2);
    });
});
//# sourceMappingURL=common.utils.spec.js.map