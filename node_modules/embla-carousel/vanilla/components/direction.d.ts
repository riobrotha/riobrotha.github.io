export declare type DirectionOptionType = 'ltr' | 'rtl';
export declare type DirectionType = {
    applyTo: (n: number) => number;
};
export declare function Direction(direction: DirectionOptionType): DirectionType;
