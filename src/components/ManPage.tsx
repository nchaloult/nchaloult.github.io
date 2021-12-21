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
        <div>
          <b>SYNOPSIS</b>
          <div className={styles.indented}>
            {/* TODO: make these dynamic based on the supported commands */}
            <b>{command.name} [-placeholder]</b>
          </div>
        </div>
        <div>
          <b>DESCRIPTION</b>
          <div className={styles.indented}>
            <b>{command.name}</b> {manPage.desc}
          </div>
        </div>
        <div>
          <b>OPTIONS</b>
          <div className={styles.indented} id={styles.options_content}>
            {/* TODO: make these dynamic based on the supported commands */}
            <div>
              <b>-a, --all</b>
              <div className={styles.indented}>
                Prints lots of Nick&apos;s important info
              </div>
            </div>
            <div>
              <b>-e, --email</b>
              <div className={styles.indented}>
                Prints Nick&apos;s email address
              </div>
            </div>
            <div>
              <b>-g, --github</b>
              <div className={styles.indented}>
                Prints a link to Nick&apos;s GitHub profile
              </div>
            </div>
            <div>
              <b>-i, --interests</b>
              <div className={styles.indented}>
                Prints what Nick is currently interested in
              </div>
            </div>
            <div>
              <b>-l, --linkedin</b>
              <div className={styles.indented}>
                Prints a link to Nick&apos;s LinkedIn profile
              </div>
            </div>
            <div>
              <b>-r, --resume</b>
              <div className={styles.indented}>
                Prints a link to view Nick&apos;s resume as a PDF
              </div>
            </div>
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
