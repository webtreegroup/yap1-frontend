import { Store } from 'core/store'

declare global {
    interface Window {
        store: Store
    }
}
