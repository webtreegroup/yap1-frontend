import { ChatFormContract } from 'core/api'

export function validateBody(body: ChatFormContract): boolean {
    if (!body.name) {
        alert('Название чата обязательно для заполнения!')

        return false
    }

    return true
}
