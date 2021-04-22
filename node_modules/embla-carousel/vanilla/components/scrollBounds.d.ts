import { LimitType } from './limit';
import { ScrollBodyType } from './scrollBody';
import { Vector1DType } from './vector1d';
export declare type ScrollBoundsType = {
    constrain: (pointerDown: boolean) => void;
    toggleActive: (active: boolean) => void;
};
export declare function ScrollBounds(limit: LimitType, location: Vector1DType, target: Vector1DType, scrollBody: ScrollBodyType): ScrollBoundsType;
