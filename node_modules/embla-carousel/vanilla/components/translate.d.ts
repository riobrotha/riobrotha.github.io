import { AxisType } from './axis';
import { DirectionType } from './direction';
import { Vector1DType } from './vector1d';
export declare type TranslateType = {
    clear: () => void;
    to: (vector: Vector1DType) => void;
    toggleActive: (active: boolean) => void;
};
export declare function Translate(axis: AxisType, direction: DirectionType, container: HTMLElement): TranslateType;
