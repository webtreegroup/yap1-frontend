import { Component, ComponentChildrenProps } from 'core/block'
import { ComponentProps } from 'core/block/Component'

export interface ModalProps extends ComponentProps {
    id: string
    modalTitle: string
    oKButtonText?: string
    cancelButtonText?: string
    footer?: boolean
}

export class Modal extends Component<HTMLDivElement, ModalProps> {
    constructor(props: ModalProps, children = {} as ComponentChildrenProps) {
        super(
            'div',
            {
                ...props,
                className: ['modal', 'fade', 'Modal'],
            },
            children,
        )
    }

    createResources({ id }: ModalProps): void {
        this.element?.setAttribute('id', id)
        this.element?.setAttribute('tabindex', '-1')
        this.element?.setAttribute('aria-labelledby', 'exampleModalLabel')
        this.element?.setAttribute('aria-hidden', 'true')
    }

    setComponentTemplate(props?: ModalProps): string {
        return `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${
                            props?.modalTitle
                        }</h5>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body" data-component="body"></div>
                    
                    ${
                        props?.footer
                            ? `
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    ${props?.cancelButtonText || 'Отмена'}
                                </button>

                                <button type="button" class="btn btn-primary">
                                    ${props?.oKButtonText || 'Далее'}
                                </button>
                            </div>
                        `
                            : ''
                    }
                    
                </div>
            </div>
        `
    }
}
