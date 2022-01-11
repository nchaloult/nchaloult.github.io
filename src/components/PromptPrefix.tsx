import React from 'react';
import styles from './PromptPrefix.module.scss';

function PromptPrefix() {
  return <b id={styles.prompt}>guest@nchaloult.com:~$</b>;
}

export default PromptPrefix;
