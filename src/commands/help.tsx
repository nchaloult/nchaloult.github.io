import React, { Fragment } from 'react';
import { AcceptsNoArgsError, Program } from '.';
import { getRandomKey } from '../utils';
import styles from './Help.module.scss';

export default class Help implements Program {
  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      throw new AcceptsNoArgsError();
    }

    return (
      <Fragment key={getRandomKey()}>
        <b>How to Use Commands</b>
        <b>===================</b>
        <span>
          Type <b className={styles.highlighted}>nick -a</b>, then press Enter.
        </span>
        <br />
        <span>
          <b className={styles.highlighted}>nick</b> is the program you&apos;re
          invoking, and <b className={styles.highlighted}>-a</b> is an option
          that sends specific instructions to that program.
        </span>
        <br />
        <span>
          You can provide more than one option at a time. Try running:
        </span>
        <span>
          &nbsp;&nbsp;- <b className={styles.highlighted}>nick -egl</b>
        </span>
        <span>
          &nbsp;&nbsp;-{' '}
          <b className={styles.highlighted}>nick --linkedin --resume</b>
        </span>
        <span>&nbsp;&nbsp;- etc.</span>
        <br />
        <b>Available Programs</b>
        <b>==================</b>
        {/* TODO: Make this content dynamic based on the `programs` map in
        index.tsx */}
        <b className={styles.highlighted}>clear</b>
        <b className={styles.highlighted}>fortune</b>
        <b className={styles.highlighted}>help</b>
        <b className={styles.highlighted}>nick</b>
        <b className={styles.highlighted}>whoami</b>
      </Fragment>
    );
  }
}
