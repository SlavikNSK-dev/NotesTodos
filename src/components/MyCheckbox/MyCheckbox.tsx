import React, { FunctionComponent, ChangeEvent } from 'react';
import cn from 'classnames';
import s from './MyCheckbox.module.scss';

export interface IMyCheckbox {
  name?: string;
  checked?: boolean;
  onClick?(): void;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

/**
 * Компонент чекбокса атрибут checked приходит из пропсов
 */
const MyCheckbox: FunctionComponent<IMyCheckbox> = (props) => {
  // Props destructuring
  const { name, checked, onClick, onChange } = props;

  // Handlers
  const handleClick = () => {
    if (onClick) onClick();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

export default React.memo(MyCheckbox);
