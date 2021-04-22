declare type SlideBoundType = {
    start: number;
    end: number;
    index: number;
};
export declare type SlidesInViewType = {
    check: (location: number) => number[];
    findSlideBounds: (offset: number, threshold?: number) => SlideBoundType[];
};
export declare function SlidesInView(viewSize: number, contentSize: number, slideSizes: number[], snaps: number[], loop: boolean, inViewThreshold: number): SlidesInViewType;
export {};
