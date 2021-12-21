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
        <span>
          <b>NAME</b>
          <div className={styles.indented}>
            <span>
              <b>{command.name}</b> -- {manPage.shortDesc}
            </span>
          </div>
        </span>
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
