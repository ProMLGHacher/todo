import { classNames } from '@/shared/lib/classNames';
import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const Button: React.FC<ButtonProps> = (
    { children, ...props }
) => {
    return (
        <button
            {...props}
            className={
                classNames(
                    styles.button,
                    [props.className]
                )
            }
        >
            {children}
        </button>
    );
};
