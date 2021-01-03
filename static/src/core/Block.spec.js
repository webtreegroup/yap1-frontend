import chai from 'chai';
import { render } from '../utils/common.utils.js';
import { Block } from './Block.js';
const { expect } = chai;
describe("Block usage suite", () => {
    function createBlock(props) {
        return new Block('div', props);
    }
    it("Props should be change", () => {
        const Block = createBlock({ desc: 'description' });
        Block.setProps({ desc: 'description edit' });
        expect(Block.props).to.eql({ desc: 'description edit' });
        expect(Block.props).not.eql({ desc: 'description' });
    });
    it("Block should be hide", () => {
        const Block = createBlock({ className: 'block-component' });
        render('body', Block);
        Block.hide();
        const blockNode = document.querySelector('.block-component');
        expect(blockNode).to.eql(null);
    });
    it("Block should be show", () => {
        const Block = createBlock({ className: 'block-component' });
        render('body', Block);
        const blockNode = document.querySelector('.block-component');
        expect(blockNode).not.eql(null);
    });
});
