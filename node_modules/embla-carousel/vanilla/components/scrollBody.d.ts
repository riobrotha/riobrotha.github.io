import { Vector1DType } from './vector1d';
export declare type ScrollBodyType = {
    direction: () => number;
    seek: (v: Vector1DType) => ScrollBodyType;
    settle: (v: Vector1DType) => boolean;
    update: () => void;
    useBaseMass: () => ScrollBodyType;
    useBaseSpeed: () => ScrollBodyType;
    useMass: (n: number) => ScrollBodyType;
    useSpeed: (n: number) => ScrollBodyType;
};
export declare function ScrollBody(location: Vector1DType, baseSpeed: number, baseMass: number): ScrollBodyType;
