import chai from 'chai'
import { IComponent } from '../App.types.js'
import { render } from '../utils/common.utils.js'
import { Block, IBaseTemplateRender, IBlockChildren } from './Block.js'

const { expect } = chai

interface IBlockComponent extends IComponent {
    desc?: string
}

describe("Block usage suite", () => {
    function createBlock(
        props: IBlockComponent,
        children = {} as IBlockChildren, 
        baseTmplRender?: IBaseTemplateRender
    ) {
        return new Block<HTMLDivElement, IBlockComponent>(
            'div', 
            props,
            children,
            baseTmplRender
        )
    }

    const className = 'block-component'

    const tmplRender = () => `
        <div className="block-component__body" data-component="root"></div>
    `

    it("Props should be change", () => {
        const Block = createBlock({ desc: 'description' })
        Block.setProps({ desc: 'description edit' })

        expect(Block.props).to.eql({ desc: 'description edit' })
        expect(Block.props).not.eql({ desc: 'description' })
    })

    it("Block should be hide", () => {
        const Block = createBlock({ className })
        render('body', Block)

        Block.hide()

        const blockNode = document.querySelector(`.${className}`)
        expect(blockNode).to.eql(null)
    })

    it("Block should be show", () => {
        const Block = createBlock({ className })
        render('body', Block)

        const blockNode = document.querySelector(`.${className}`)
        expect(blockNode).not.eql(null)
    })

    it("Block should be render like specify in template", () => {
        const Block1 = createBlock({ className: 'child-block-component' })
        const Block2 = createBlock({ className }, { root: Block1 }, tmplRender)
        render('body', Block2)
        
        const childBlockNode = document.querySelector('.child-block-component')
        expect(childBlockNode).not.eql(null)
    })
})
