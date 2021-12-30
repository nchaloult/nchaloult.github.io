import React, { useState } from 'react';
import Prompt from './Prompt';
import styles from './Shell.module.scss';
import { prompt } from '../resources/strings';

function Shell() {
  const [prevLines, setPrevLines] = useState<JSX.Element[]>([
    <span key={24}>
      Type &quot;help&quot;, then press Enter, for available commands
    </span>,
  ]);

  function handleNewCommand(cmd: string): void {
    // TODO: This piece is duplicated with the corresponding piece in the Prompt
    // component. Find a way to refactor.
    const cmdWithPrompt = (
      <span>
        <b>{prompt}</b> {cmd}
      </span>
    );
    // TODO: Parse command. For now, just hard code the command's output.
    const output = <span>foo</span>;
    setPrevLines([...prevLines, cmdWithPrompt, output]);
  }

  return (
    <div id={styles.container}>
      {prevLines}
      <Prompt sendCommandToShell={handleNewCommand} />
    </div>
  );
}

export default Shell;
