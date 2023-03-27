import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        Ничего не найдено
      </h1>
      <p1 className={styles.description}>
      Данная страница не работает или недоступна.
      </p1>
    </div>
  )
}

export default NotFoundBlock;
