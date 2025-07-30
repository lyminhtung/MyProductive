import type {BaseProps, Size } from "../../types/common";

// React.InputHTMLAttributes<HTMLInputElement> lấy tất cả các thuộc tính hợp lệ cho một thẻ <input>
// Omit<Type, Keys> Lấy tất cả các property trong Type, và bỏ đi property có tên là 'size'(size gốc của html) để chúng ta sẽ lấy attribute size từ Size của commont.ts
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'size'>, BaseProps{
    label?: string;
    error?: string;
    helperText?: string;
    size?: Size;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}