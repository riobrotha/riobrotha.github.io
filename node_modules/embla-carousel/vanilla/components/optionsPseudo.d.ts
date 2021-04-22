import { EmblaOptionsType } from './options';
export declare type OptionsPseudoType = {
    get: () => EmblaOptionsType;
};
export declare function OptionsPseudo(node: HTMLElement): OptionsPseudoType;
