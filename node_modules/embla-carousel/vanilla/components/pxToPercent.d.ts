export declare type PxToPercentType = {
    measure: (n: number) => number;
    totalPercent: number;
};
export declare function PxToPercent(viewInPx: number): PxToPercentType;
