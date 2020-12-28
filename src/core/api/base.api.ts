import { StoreValue } from "../../App.types.js"

export class BaseAPI {
    create(_: StoreValue) { 
        throw new Error('Not implemented')
    }

    request() { 
        throw new Error('Not implemented') 
    }

    update(_: StoreValue) { 
        throw new Error('Not implemented') 
    }

    delete(_: StoreValue) { 
        throw new Error('Not implemented') 
    }
}