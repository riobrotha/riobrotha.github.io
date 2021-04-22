import { AxisType } from './axis';
import { SlidesInViewType } from './slidesInView';
import { Vector1DType } from './vector1d';
declare type LoopPointType = {
    point: number;
    location: number;
    index: number;
    getTarget: () => number;
};
export declare type SlideLooperType = {
    canLoop: () => boolean;
    clear: () => void;
    loop: () => void;
    loopPoints: LoopPointType[];
};
export declare function SlideLooper(axis: AxisType, viewSize: number, contentSize: number, slideSizesWithGaps: number[], scrollSnaps: number[], slidesInView: SlidesInViewType, scrollLocation: Vector1DType, slides: HTMLElement[]): SlideLooperType;
export {};
