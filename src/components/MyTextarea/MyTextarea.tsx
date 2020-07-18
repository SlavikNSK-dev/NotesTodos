import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
// import types
// import components
// other imports
import s from './MyTextarea.module.scss';

export interface IProps {
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
const MyTextarea: FunctionComponent<IProps> = (props): JSX.Element => {
  // Props destructuring
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
      // Двигаем курсор и фокусим поле
      textareaRef.current?.setSelectionRange(caretPosition, caretPosition);
      textareaRef.current?.focus();
    }
  }, [isFocused, caretPosition]);

  // Handlers
  const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (onKeyDown) onKeyDown(e);
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
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

export default MyTextarea;
