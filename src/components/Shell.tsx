import React, { useState } from 'react';
import Prompt from './Prompt';
import styles from './Shell.module.scss';

function Shell() {
  const [prevLines, setPrevLines] = useState<JSX.Element[]>([
    <span key={24}>shell component</span>,
    <span key={42}>foo</span>,
  ]);

  return (
    <div id={styles.container}>
      {prevLines}
      <Prompt />
    </div>
  );
}

export default Shell;
