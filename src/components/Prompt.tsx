import React, { useState } from 'react';
import styles from './Prompt.module.scss';
import { prompt } from '../resources/strings';

type Props = {
  sendCommandToShell(cmd: string): void;
};

function Prompt(props: Props) {
  const [cmd, setCmd] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.sendCommandToShell(cmd);
    setCmd('');
  }

  return (
    <div id={styles.container}>
      <b>{prompt}</b>
      <form id={styles.input} onSubmit={handleSubmit}>
        <input
          // This hard coded ID is present to enable the
          // click-anywhere-to-focus-me functionality to work.
          id="prompt-input-text-field"
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
