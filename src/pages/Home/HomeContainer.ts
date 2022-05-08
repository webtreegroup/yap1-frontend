import { checkAuth } from 'utils/auth.utils'
import { Home } from '.'

export class HomeContainer {
    onLoadApp(): Promise<void> {
        return checkAuth().catch(alert)
    }

    createBlock(): Home {
        return new Home({
            onLoadComponent: this.onLoadApp,
        })
    }
}
