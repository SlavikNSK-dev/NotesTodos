import React, { FunctionComponent } from 'react';
import cn from 'classnames';
// import types
// import components
// other imports
import s from './MyCheckbox.module.scss';

export interface IProps {
  name?: string;
  checked?: boolean;
  onClick?(): void;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

/**
 * Компонент чекбокса
 */
const MyCheckbox: FunctionComponent<IProps> = (props): JSX.Element => {
  // Props destructuring
  const { name, checked, onClick, onChange } = props;

  // Handlers
  const handleClick = (): void => {
    if (onClick) onClick();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) onChange(event);
  };

  return (
    <label>
      <div className={s.styledCheckbox}>
        <div className={s.innerBox}>
          <div className={cn(s.check, { [s.checked]: checked })}></div>
        </div>
      </div>
      <input
        className={s.hiddenInput}
        name={name}
        type="checkbox"
        checked={checked}
        onClick={handleClick}
        onChange={handleChange}
      />
    </label>
  );
};

export default MyCheckbox;
