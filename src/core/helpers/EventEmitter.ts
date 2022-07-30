import EventEmitter from 'eventemitter3'

export const EVENTS = {
    NOTIFICATION_SHOW: 'NOTIFICATION_SHOW',
}

export const eventEmitter = new EventEmitter()
