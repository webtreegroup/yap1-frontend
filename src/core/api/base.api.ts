import { IStateValue } from "../../App.types.js"

export class BaseAPI {
    create(_: IStateValue) { 
        throw new Error('Not implemented')
    }

    request() { 
        throw new Error('Not implemented') 
    }

    update(_: IStateValue) { 
        throw new Error('Not implemented') 
    }

    delete(_: IStateValue) { 
        throw new Error('Not implemented') 
    }
}