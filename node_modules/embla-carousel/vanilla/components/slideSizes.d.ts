import { AxisType } from './axis';
import { PxToPercentType } from './pxToPercent';
export declare type SlideSizesType = {
    slideSizes: number[];
    slideSizesWithGaps: number[];
};
export declare function SlideSizes(axis: AxisType, pxToPercent: PxToPercentType, slides: HTMLElement[], slideRects: DOMRect[], loop: boolean): SlideSizesType;
