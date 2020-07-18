import React, { FunctionComponent } from 'react';
// import types
// import components
// other imports
import s from './Preloader.module.scss';

export interface IProps {}

/**
 * Компонент прелоадера взятый с https://loading.io/css/
 */
const Preloader: FunctionComponent<IProps> = (): JSX.Element => {
  return (
    <div className={s.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Preloader;
