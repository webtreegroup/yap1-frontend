import { renderComponent } from 'utils'
import { ComponentProps } from 'core/block/Component'
import {
    Component,
    BaseTemplateRenderProps,
    ComponentChildrenProps,
} from './Component'

interface IBlockComponent extends ComponentProps {
    desc?: string
}

describe('Block usage suite', () => {
    beforeEach(() => {
        document.body.innerHTML = ''
    })

    function createBlock(
        props: IBlockComponent,
        children = {} as ComponentChildrenProps,
        baseTmplRender?: BaseTemplateRenderProps,
    ) {
        return new Component<HTMLDivElement, IBlockComponent>(
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
        renderComponent(Block, 'body')

        Block.hide()

        const blockNode = document.querySelector(`.${className}`)
        expect(blockNode).toEqual(null)
    })

    it('Block should be show', () => {
        const Block = createBlock({ className })
        renderComponent(Block, 'body')

        const blockNode = document.querySelector(`.${className}`)
        expect(blockNode).not.toEqual(null)
    })

    it('Block should be render like specify in template', () => {
        const Block1 = createBlock({ className: 'child-block-component' })
        const Block2 = createBlock({ className }, { root: Block1 }, tmplRender)
        renderComponent(Block2, 'body')

        const childBlockNode = document.querySelector('.child-block-component')
        expect(childBlockNode).not.toEqual(null)
    })
})
