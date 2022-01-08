import React, { useState } from 'react';
import Prompt from './Prompt';
import styles from './Shell.module.scss';
import { prompt } from '../resources/strings';

function Shell() {
  const [prevLines, setPrevLines] = useState<JSX.Element[]>([
    // A hard coded key is provided since this is a list, and all elements in a
    // list that are drawn to the screen need a key.
    <span key={42}>
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

    // If the user just pressed Enter and cmd is empty, mimic the behavior of a
    // real shell by just adding cmdWithPrompt to the prevLines array.
    if (cmd === '') {
      setPrevLines([...prevLines, cmdWithPrompt]);
    } else {
      // TODO: Parse command. For now, just hard code the command's output.
      const output = <span>foo</span>;
      setPrevLines([...prevLines, cmdWithPrompt, output]);
    }
  }

  return (
    <div id={styles.container}>
      {prevLines}
      <Prompt sendCommandToShell={handleNewCommand} />
    </div>
  );
}

export default Shell;
