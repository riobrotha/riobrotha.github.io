declare type CallbackType = (evt: EmblaEventType) => void;
export declare type EmblaEventType = 'init' | 'pointerDown' | 'pointerUp' | 'scroll' | 'select' | 'settle' | 'destroy' | 'reInit' | 'resize';
export declare type EventEmitterType = {
    emit: (evt: EmblaEventType) => EventEmitterType;
    on: (evt: EmblaEventType, cb: CallbackType) => EventEmitterType;
    off: (evt: EmblaEventType, cb: CallbackType) => EventEmitterType;
};
export declare function EventEmitter(): EventEmitterType;
export {};
