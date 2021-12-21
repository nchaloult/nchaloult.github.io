import React, { useState } from 'react';
import Prompt from './Prompt';
import styles from './Shell.module.scss';

function Shell() {
  const [prevLines, setPrevLines] = useState<JSX.Element[]>([
    <span key={24}>
      Type &quot;help&quot;, then press Enter, for available commands
    </span>,
  ]);

  return (
    <div id={styles.container}>
      {prevLines}
      <Prompt />
    </div>
  );
}

export default Shell;
