import type { BaseProps } from "../../types/common";

export interface CardProps extends BaseProps{
    icon?: React.ReactNode,
    title: string,
    description?:string,
    image?: React.ReactNode,
    types?:'01' | '02' | '03',
    color?: string,
    size?: 'sm' | 'md' | 'lg'
}