import chai from 'chai';
import { Router } from './Router.js';
const { assert } = chai;
describe("Router usage suite", () => {
    it("Path should be equal", () => {
        Router.go('/chats');
        assert.equal(window.location.pathname, '/chats');
    });
});
