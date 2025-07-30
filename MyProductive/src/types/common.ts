
/*Làm  base cho các component khác */
export interface BaseProps {
    className?: string;
    /* 
    React.ReactNode là một type trong React(TypeScript) mô tả tất cả
    giá trị hợp lệ mà bạn có thể render trong JSX ví dụ như :
    string,number,null,undifned,bolean, JSX.Element => <div>abc<div/>
    ReactFragment => <></>,...
    */ 
    children?: React.ReactNode;
}
export type Size = 'sm' | 'md' | 'lg';
export type Variance = 'primary' | 'secondary'| 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';