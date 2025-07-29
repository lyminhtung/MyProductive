/*2.File định nghĩa kiểu dữ liệu (type/interface) cho props
mà component Button trong dự án sẽ nhận*/
import type { BaseProps,Size,Variance } from "../../types/common";

/*extends React.ButtonHTMLAttributes<HTMLButtonElement> Kế thừa tất cả thuộc tính chuẩn
mà thẻ button HTML có như (onClick, disabled,type,value,...), và kế thừa cả className
và childeren từ BaseProps đã được tạo ở common.ts */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,BaseProps{
    variant?: Variance | 'outline';
    size?: Size;
    //loading : true hien thi trang thai loading va disable nut
    loading?: boolean;
    // Cho phép truyền một icon (React element{img} hoặc svg)
    icon? : React.ReactNode;
    //vị trí icon: bên trái hoặc bên phải của text
    iconPosition?: 'left' | 'right';
    // true => chiếm toàn bộ chiều ngang container
    fullWidth?: boolean;

}