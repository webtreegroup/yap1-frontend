import { Store, StoreValue } from "./App.model"

export class Templator {
  _template: string

  constructor(template: string) {
    this._template = template
  }
  
  get(obj: Store, path: string, defaultValue?: string) {
    return path.split('.').reduce<Store | StoreValue>((
      acc, curr
    ) => acc && typeof acc === 'object' ? acc[curr] : defaultValue, obj)
  }

  compile(ctx: Store) {
    return this._template.replace(
        /\{\{(.+?)\}\}/ig, 
        (_match, ...group) => {
          const result = this.get(ctx, group[0].trim())
          if (typeof result === 'object') {
            console.log('it is object')
          }

          return result ? String(result) : ''
        }
    )
  }
}
