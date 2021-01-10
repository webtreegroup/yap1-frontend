import { escapeHtml, getArrLastEl } from './common.utils'

describe('Сommon utils usage suite', () => {
    it('Should return last element of array', () => {
        expect(getArrLastEl([1, 5, 6, 2])).toBe(2)
    })

    it('Should escape HTML, return string protected from XSS', () => {
        expect(escapeHtml('I = love js&ts')).toBe('I &#x3D; love js&amp;ts')
    })
})
