import { LimitType } from './limit';
export declare type ScrollProgressType = {
    get: (n: number) => number;
};
export declare function ScrollProgress(limit: LimitType): ScrollProgressType;
