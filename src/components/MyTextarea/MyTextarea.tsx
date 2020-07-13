import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import s from './MyTextarea.module.scss';

export interface IMyTextarea {
  isFocused?: boolean;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onKeyDown?(e: React.KeyboardEvent<HTMLTextAreaElement>): void;
  onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

/**
 * Компонент textarea
 */
const MyTextarea: FunctionComponent<IMyTextarea> = (props) => {
  const {
    isFocused,
    value = '',
    placeholder = 'placeholder',
    disabled = false,
    onKeyDown,
    onChange,
  } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [caretPosition, setCaretPosition] = useState<number>(1);

  useEffect(() => {
    if (isFocused) {
      // Двигаем курсор
      textareaRef.current?.setSelectionRange(caretPosition, caretPosition);
      textareaRef.current?.focus();
    }
  });

  const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (onKeyDown) onKeyDown(e);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCaretPosition(e.target.selectionEnd);
    if (onChange) onChange(e);
  };

  return (
    <TextareaAutosize
      ref={textareaRef}
      className={s.textarea}
      value={value}
      placeholder={placeholder}
      onKeyDown={keyDownHandler}
      onChange={onChangeHandler}
      disabled={disabled}
    />
  );
};

export default React.memo(MyTextarea);
