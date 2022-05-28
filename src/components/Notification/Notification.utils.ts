import { Toast } from 'bootstrap'

export class NotificationHelper {
    static show(): void {
        const notificationElement = document.getElementById('notification')

        if (!notificationElement) return

        const notificationIntance = Toast.getOrCreateInstance(
            notificationElement,
            {
                autohide: false,
            },
        )

        notificationIntance.show()
        notificationIntance.dispose()
    }
}
