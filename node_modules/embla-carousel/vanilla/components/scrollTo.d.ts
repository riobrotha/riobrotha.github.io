import { AnimationType } from './animation';
import { CounterType } from './counter';
import { EventEmitterType } from './eventEmitter';
import { ScrollTargetType } from './scrollTarget';
import { Vector1DType } from './vector1d';
export declare type ScrollToType = {
    distance: (n: number, snap: boolean) => void;
    index: (n: number, direction: number) => void;
};
export declare function ScrollTo(animation: AnimationType, indexCurrent: CounterType, indexPrevious: CounterType, scrollTarget: ScrollTargetType, targetVector: Vector1DType, events: EventEmitterType): ScrollToType;
