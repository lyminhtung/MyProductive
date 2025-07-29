import React from 'react'
import type { ButtonProps } from './button.type'
import './Button.scss';
/* React.FC<> là một generic type mà react cung cấp
dùng trong TypeScript để khai báo một React functional component
có kiểu props cụ thể */
const Button: React.FC<ButtonProps> = ({
    variant= 'primary',
    size = 'md',
    loading = false,
    icon,
    iconPosition = 'left',
    fullWidth =false,
    children,
    className = '',
    disabled,
    ...rest
})=>{
    /*Tạo một mảng chứa các class ví dụ :
    nếu fullWidth = true thì thêm tên class là
    'btn--full-width'*/
    const classes = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth && 'btn--full-width',
        className
    /*dùng .filter(Boolean).join(' '):
    bời vì mảng ban đầu khi thêm classes thì nó sẽ là mảng:
    ["btn","btn--primary","btn--md",false,"",...] vì 
    fullWidth && 'btn--full-width' => false, thì Boolean trong JavaScript là hàm chuyển giá trị sang true/false
    ví dụ Boolean("abc") => true , 0 => falase, null => fall,... vậy nên .filter(Boolean) sẽ giữ lại những phần tử 
    mà callback trả về true nếu dùng Boolean làm call back thì mỗi phần tử sẽ được ép sang true/false. những phần tử 
    falsy(false,"",null,undifined,0) sẽ bị loại bỏ. Ví dụ "btn" = > truthy => giữ lại, "" falsy=> loại bỏ, false, loại bỏ,
    "large" truthy => giữ lại. Tóm lại là Bên trong .filter(Boolean): Lấy phần tử "btn" → Boolean("btn") → true → giữ "btn",
    Lấy phần tử "" → Boolean("") → false → loại, Lấy phần tử "active" → Boolean("active") → true → giữ "active" => vậy nên sau đó
    ta sẽ được một mảng là ["btn", "btn--primary", "btn--md", "btn--full-width", "custom"]
    */
   // Sau đó join(' ') nối các phần tử mảng thành một chuỗi, cách nhau bởi dấu cách ' '. sau đó ta sẽ được mảng ["btn", "btn--primary", "btn--md", "btn--full-width", "custom"]
    ].filter(Boolean).join(' ');
    const renderIcon = () =>{
        /*Nếu prop loading = true => trả về một <div> có class btn_loading 
        Thường class này được css để hiển thị spinner hoặc animation loading */
        if(loading){
            return <div className="btn__loading"/>
        }
        /*Nếu không loading kiểm tra icon nếu có icon(ReactNode), trả về một span chứa icon đó
         btn__icon: class chung cho icon, btn__icon--left hoặc btn__icon--right dựa vào giá trị của iconPosition*/
        if(icon){
            return (
                <span className={`btn__icon btn__icon--${iconPosition}`}>
                    {icon}
                </span>
            )
        }
        // Trả về null nếu React không render gì cả 
        return null;
    }
    return(
        <button 
        className={classes}
        disabled = {disabled || loading}
        {...rest}
        >
            <div className='btn__content'>
                {iconPosition === 'left' && renderIcon()}
                {children}
                {iconPosition === 'right' && renderIcon()}
            </div>
        </button>
    )
}

export default Button