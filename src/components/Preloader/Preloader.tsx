import React, { FunctionComponent } from 'react';
import s from './Preloader.module.scss';

export interface IPreloader {}

/**
 * Компонент прелоадера взятый с https://loading.io/css/
 */
const Preloader: FunctionComponent<IPreloader> = () => {
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

export default React.memo(Preloader);
