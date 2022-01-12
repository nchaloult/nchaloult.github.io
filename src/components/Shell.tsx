import React, { useRef, useState } from 'react';
import Prompt from './Prompt';
import styles from './Shell.module.scss';
import { parseCommand } from '../commands';
import { flushSync } from 'react-dom';
import PromptPrefix from './PromptPrefix';
import { getRandomKey } from '../utils';

type DivProps = React.HTMLProps<HTMLDivElement>;

// eslint-disable-next-line react/display-name
const Shell = React.forwardRef<HTMLDivElement, DivProps>((_props, ref) => {
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const [prevLines, setPrevLines] = useState<JSX.Element[]>([
    <span key={getRandomKey()}>
      Type <b className={styles.highlighted}>help</b>, then press Enter, for
      available commands
    </span>,
  ]);

  // Helper function that wraps setPrevLines(). Auto-scrolls so that the newest
  // lines that are at the bottom of our container div are in view.
  function changePrevLines(lines: JSX.Element[]) {
    // Ensure that the DOM has been updated before considering whether to
    // auto-scroll.
    flushSync(() => setPrevLines(lines));

    if (innerContainerRef && innerContainerRef.current) {
      const lastChild = innerContainerRef.current.lastElementChild;
      lastChild?.scrollIntoView({
        block: 'end',
        inline: 'nearest',
      });
    }
  }

  function handleNewCommand(cmd: string): void {
    const cmdWithPrompt = (
      <span key={getRandomKey()}>
        <PromptPrefix /> {cmd}
      </span>
    );

    if (cmd === '') {
      // If the user just pressed Enter and cmd is empty, mimic the behavior of
      // a real shell by just adding cmdWithPrompt to the prevLines array.
      changePrevLines([...prevLines, cmdWithPrompt]);
    } else if (cmd === 'clear') {
      // Handle the clear program's special behavior here since we have easy
      // access to the setPrevLines() hook.
      //
      // TODO: Reevaluate this approach to implementing `clear`? Idk tho — that
      // might mean I'd have to revisit the way I'm doing a lot of stuff...
      changePrevLines([]);
    } else {
      changePrevLines([...prevLines, cmdWithPrompt, parseCommand(cmd)]);
    }
  }

  return (
    // This ref is attached to the container div to enable the
    // click-anywhere-to-focus functionality for the Prompt component's input
    // text field to work.
    <div ref={ref} id={styles.outer_container}>
      <div ref={innerContainerRef} id={styles.inner_container}>
        {prevLines}
        <Prompt sendCommandToShell={handleNewCommand} />
      </div>
    </div>
  );
});

export default Shell;
