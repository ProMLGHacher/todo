import styles from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ prefixIcon, suffixIcon, ...props }) => {

  return (
    <div className={classNames(styles.inputWrapper)} style={{ width: props.style?.width }}>
      {prefixIcon && <div className={styles.prefixIcon}>{prefixIcon}</div>}
      <input
        className={classNames(styles.input, {
          [styles.withPrefix]: !!prefixIcon,
          [styles.withSuffix]: !!suffixIcon,
        })}
        {...props}
        style={{
          ...props.style,
          width: undefined
        }}
      />
      {suffixIcon && <div className={styles.suffixIcon}>{suffixIcon}</div>}
    </div>
  );
};