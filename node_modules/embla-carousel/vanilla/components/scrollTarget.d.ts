import { LimitType } from './limit';
import { Vector1DType } from './vector1d';
export declare type TargetType = {
    distance: number;
    index: number;
};
export declare type ScrollTargetType = {
    byIndex: (target: number, direction: number) => TargetType;
    byDistance: (force: number, snap: boolean) => TargetType;
    shortcut: (target: number, direction: number) => number;
};
export declare function ScrollTarget(loop: boolean, scrollSnaps: number[], contentSize: number, limit: LimitType, targetVector: Vector1DType): ScrollTargetType;
