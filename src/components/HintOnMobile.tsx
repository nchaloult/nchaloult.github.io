import React from 'react';
import styles from './HintOnMobile.module.scss';

export default function HintOnMobile() {
  return (
    <div id={styles.hint_on_mobile}>
      <b>
        <em>Tap here to type</em>
      </b>
    </div>
  );
}
