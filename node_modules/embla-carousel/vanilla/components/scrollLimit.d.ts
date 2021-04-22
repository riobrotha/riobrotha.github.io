import { LimitType } from './limit';
export declare type ScrollLimitType = {
    limit: LimitType;
};
export declare function ScrollLimit(contentSize: number, scrollSnaps: number[], loop: boolean): ScrollLimitType;
