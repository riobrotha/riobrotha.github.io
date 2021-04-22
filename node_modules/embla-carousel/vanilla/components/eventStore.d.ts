declare type EventHandlerType = EventListener | EventListenerObject | null;
declare type EventOptionsType = boolean | AddEventListenerOptions | undefined;
export declare type EventStoreType = {
    add: (node: EventTarget, type: keyof WindowEventMap, handler: EventHandlerType, options?: EventOptionsType) => EventStoreType;
    removeAll: () => EventStoreType;
};
export declare function EventStore(): EventStoreType;
export {};
