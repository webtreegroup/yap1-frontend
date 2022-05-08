import { checkAuth } from 'utils/auth.utils'
import { Home } from '.'

export class HomeContainer {
    onLoadApp(): Promise<void> {
        return checkAuth().catch((err) => {
            alert(err)
        })
    }

    createBlock(): Home {
        return new Home({
            onLoadComponent: this.onLoadApp,
        })
    }
}
