import { AlignmentType } from './alignment';
import { AxisType } from './axis';
import { PxToPercentType } from './pxToPercent';
export declare type ScrollSnapType = {
    snaps: number[];
    snapsAligned: number[];
};
export declare function ScrollSnap(axis: AxisType, alignment: AlignmentType, pxToPercent: PxToPercentType, containerRect: DOMRect, slideRects: DOMRect[], slidesToScroll: number): ScrollSnapType;
