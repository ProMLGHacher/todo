import { useId } from 'react';
import cls from './Checkbox.module.scss';
import { IoIosCheckmark } from 'react-icons/io';

type CheckboxProps = {
    id?: string;
    checked: boolean;
    onChange?: (e?: boolean) => void;
}


export const Checkbox = ({ id, checked }: CheckboxProps) => {

    const checkboxId = id ?? useId()

    return (
        <label tabIndex={0} htmlFor={checkboxId} className={cls.checkbox} style={{ pointerEvents: 'all' }}>
            <input
                style={{ pointerEvents: 'all' }}
                className={cls.checkbox__input}
                type="checkbox"
                id={checkboxId}
                checked={checked}
            />
            <span className={cls.checkbox__box}>
                <IoIosCheckmark className={cls.checkbox__tick} />
            </span>
        </label>
    )
}
