
import chai from 'chai'
import { escapeHtml, getArrLastEl, tree } from "./common.utils.js"

const { assert } = chai

describe("Сommon utils usage suite", () => {
    it("Should return last element of array", () => {
        assert.equal(getArrLastEl([1, 5, 6, 2]), 2)
    })

    it("Should escape HTML, return string protected from XSS", () => {
        assert.equal(escapeHtml('I = love js&ts'), 'I &#x3D; love js&amp;ts')
    })

    it("Tree test", () => {
        const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
            '   |   \n'
            
        assert.strictEqual(tree(5), expected)
        assert.strictEqual(tree('5'), expected)
    })
})