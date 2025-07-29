/*Lấy default export từ ./Button.tsx (hoặc .jsx) và export lại. Nhờ vậy, khi import:import Button from 'components/Button'; thay vì import Button from 'components/Button/Button';
→ Mục đích: rút ngắn đường dẫn import, làm API của thư viện/dự án gọn hơn.
*/
export { default } from './Button';
/*Re-export type export type { ButtonProps } from './Button.type';  */
export type { ButtonProps } from './button.type';
