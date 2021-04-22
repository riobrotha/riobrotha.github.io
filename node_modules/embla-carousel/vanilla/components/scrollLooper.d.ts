import { LimitType } from './limit';
import { PxToPercentType } from './pxToPercent';
import { Vector1DType } from './vector1d';
export declare type ScrollLooperType = {
    loop: (direction: number) => void;
};
export declare function ScrollLooper(contentSize: number, pxToPercent: PxToPercentType, limit: LimitType, location: Vector1DType, vectors: Vector1DType[]): ScrollLooperType;
