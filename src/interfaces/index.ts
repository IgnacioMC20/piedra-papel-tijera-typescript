import { StaticImageData } from "next/image";

export interface OptionProps {
    name: string;
    value: string;
    image: StaticImageData;
} 

export type validValue = 'piedra' | 'papel' | 'tijera';

export interface OptionsProps {
    map(arg0: (option: any) => JSX.Element): import("react").ReactNode;
    [index: number]: { name: string; value: validValue; image: StaticImageData };
  }
