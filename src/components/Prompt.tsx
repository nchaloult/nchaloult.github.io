import React from 'react';
import styles from './Prompt.module.scss';

function Prompt() {
  return (
    <div id={styles.container}>
      <b>guest@nchaloult.com:~$</b>
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
