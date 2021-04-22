import { EventStoreType } from './eventStore';
import { ScrollToType } from './scrollTo';
export declare type SlideFocusType = {
    addActivationEvents: (slides: HTMLElement[]) => void;
    removeAllEvents: EventStoreType['removeAll'];
};
export declare function SlideFocus(rootNode: HTMLElement, scrollTo: ScrollToType, slidesToScroll: number): SlideFocusType;
