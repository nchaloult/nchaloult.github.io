import React, { useEffect, useRef, useState } from 'react';
import styles from './Prompt.module.scss';
import { prompt } from '../resources/strings';

type Props = {
  sendCommandToShell(cmd: string): void;
};

function Prompt(props: Props) {
  const [command, setCommand] = useState('');

  // A corresponding ref exists for this piece of state because event listeners
  // only have access to any state that existed when they were initialized. If
  // want to see the most up-to-date state inside of a listener, we need to use
  // a ref.
  const [prevCommands, _setPrevCommands] = useState<string[]>([]);
  const prevCommandsRef = useRef(prevCommands);
  function setPrevCommands(prevCommands: string[]) {
    prevCommandsRef.current = prevCommands;
    _setPrevCommands(prevCommands);
  }

  // A corresponding ref exists for this piece of state because event listeners
  // only have access to any state that existed when they were initialized. If
  // want to see the most up-to-date state inside of a listener, we need to use
  // a ref.
  const [prevCommandIdx, _setPrevCommandIdx] = useState(0);
  const prevCommandIdxRef = useRef(prevCommandIdx);
  function setPrevCommandIdx(prevCommandIdx: number) {
    prevCommandIdxRef.current = prevCommandIdx;
    _setPrevCommandIdx(prevCommandIdx);
  }

  useEffect(() => {
    document.addEventListener('keydown', checkForArrowKeyPressed);
    return () =>
      document.removeEventListener('keydown', checkForArrowKeyPressed);
  }, []);

  // Called each time a key is pressed. If the pressed key is either the up or
  // down arrow key, then move through the history of previously run commands.
  //
  // TODO: Properly type e.
  function checkForArrowKeyPressed(e: any) {
    const pressedKey = e.key;

    // Shadowing state variables to their ref counterparts.
    const prevCommands = prevCommandsRef.current;
    const prevCommandIdx = prevCommandIdxRef.current;

    if (pressedKey === 'ArrowUp' && prevCommandIdx < prevCommands.length) {
      setCommand(prevCommands[prevCommandIdx]);
      if (prevCommandIdx < prevCommands.length - 1) {
        setPrevCommandIdx(prevCommandIdx + 1);
      }
    } else if (pressedKey === 'ArrowDown' && prevCommandIdx > 0) {
      setCommand(prevCommands[prevCommandIdx - 1]);
      if (prevCommandIdx > 1) {
        setPrevCommandIdx(prevCommandIdx - 1);
      }
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.sendCommandToShell(command);
    setPrevCommands([command, ...prevCommands]);
    setPrevCommandIdx(0);
    setCommand('');
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
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
      </form>
    </div>
  );
}
export default Prompt;
