import { Router } from './Router'

describe('Router usage suite', () => {
    it('Path should be equal', () => {
        Router.go('/chats')
        expect(window.location.pathname).toBe('/chats')
    })
})
