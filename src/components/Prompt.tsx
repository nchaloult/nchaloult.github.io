import React from 'react';
import styles from './Prompt.module.scss';
import { prompt } from '../resources/strings';

function Prompt() {
  return (
    <div id={styles.container}>
      <b>{prompt}</b>
      <form id={styles.input}>
        <input
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="text"
        />
      </form>
    </div>
  );
}
export default Prompt;
