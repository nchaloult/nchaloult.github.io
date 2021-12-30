import React, { useState } from 'react';
import styles from './Prompt.module.scss';
import { prompt } from '../resources/strings';

function Prompt() {
  const [cmd, setCmd] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`running the command: ${cmd}`);
    setCmd('');
  }

  return (
    <div id={styles.container}>
      <b>{prompt}</b>
      <form id={styles.input} onSubmit={handleSubmit}>
        <input
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="text"
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
        />
      </form>
    </div>
  );
}
export default Prompt;
