import { render } from 'utils'
import { ComponentProps } from 'App.types'
import { Block, BaseTemplateRenderProps, BlockChildrenProps } from './Block'

interface IBlockComponent extends ComponentProps {
    desc?: string
}

describe('Block usage suite', () => {
    beforeEach(() => {
        document.body.innerHTML = ''
    })

    function createBlock(
        props: IBlockComponent,
        children = {} as BlockChildrenProps,
        baseTmplRender?: BaseTemplateRenderProps,
    ) {
        return new Block<HTMLDivElement, IBlockComponent>(
            'div',
            props,
            children,
            baseTmplRender,
        )
    }

    const className = 'block-component'

    const tmplRender = () => `
        <div className="block-component__body" data-component="root"></div>
    `

    it('Props should be change', () => {
        const Block = createBlock({ desc: 'description' })
        Block.setProps({ desc: 'description edit' })

        expect(Block.props).toEqual({ desc: 'description edit' })
        expect(Block.props).not.toEqual({ desc: 'description' })
    })

    it('Block should be hide', () => {
        const Block = createBlock({ className })
        render('body', Block)

        Block.hide()

        const blockNode = document.querySelector(`.${className}`)
        expect(blockNode).toEqual(null)
    })

    it('Block should be show', () => {
        const Block = createBlock({ className })
        render('body', Block)

        const blockNode = document.querySelector(`.${className}`)
        expect(blockNode).not.toEqual(null)
    })

    it('Block should be render like specify in template', () => {
        const Block1 = createBlock({ className: 'child-block-component' })
        const Block2 = createBlock({ className }, { root: Block1 }, tmplRender)
        render('body', Block2)

        const childBlockNode = document.querySelector('.child-block-component')
        expect(childBlockNode).not.toEqual(null)
    })
})
