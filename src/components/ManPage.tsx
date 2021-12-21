import React from 'react';
import styles from './ManPage.module.scss';

import { command, manPage } from '../resources/strings';

function ManPage() {
  return (
    <div id={styles.container}>
      <div className={styles.margin_row}>
        <span>
          {command.name.toUpperCase()}({manPage.sectionNumber})
        </span>
        <span>nchaloult.com General Commands Manual</span>
        <span>
          {command.name.toUpperCase()}({manPage.sectionNumber})
        </span>
      </div>
      <div id={styles.content}>
        <div>
          <b>NAME</b>
          <div className={styles.indented}>
            <b>{command.name}</b> -- {manPage.shortDesc}
          </div>
        </div>
      </div>
      <div className={styles.margin_row}>
        <span>{manPage.fullName}</span>
        <span>
          {command.name.toUpperCase()}({manPage.sectionNumber})
        </span>
      </div>
    </div>
  );
}

export default ManPage;
