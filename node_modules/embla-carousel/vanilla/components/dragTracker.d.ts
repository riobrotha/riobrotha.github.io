import { AxisOptionType, AxisType } from './axis';
import { PxToPercentType } from './pxToPercent';
import { Vector1DType } from './vector1d';
export declare type DragTrackerType = {
    pointerDown: (evt: Event) => number;
    pointerMove: (evt: Event) => number;
    pointerUp: () => number;
    readPoint: (evt: any, axis: AxisOptionType) => Vector1DType;
};
export declare function DragTracker(axis: AxisType, pxToPercent: PxToPercentType): DragTrackerType;
