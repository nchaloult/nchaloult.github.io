import React from 'react';
import styles from './ManPage.module.scss';

function ManPage() {
  return (
    <div id={styles.container}>
      <div className={styles.margin_row}>
        <span>NICK(1)</span>
        <span className={styles.centered_text}>
          nchaloult.com General Commands Manual
        </span>
        <span>NICK(1)</span>
      </div>
      <div id={styles.content}>
        <div>
          <b>NAME</b>
          <div className={styles.indented}>
            <b>nick</b> -- a Software Engineer and Computer Science graduate who
            is eager to learn about new technologies and best practices
          </div>
        </div>
        <div>
          <b>SYNOPSIS</b>
          <div className={styles.indented}>
            {/* TODO: make these dynamic based on the supported commands */}
            <b>nick [-aegilr]</b>
          </div>
        </div>
        <div>
          <b>DESCRIPTION</b>
          <div className={styles.indented}>
            <b>nick</b> enjoys discovering better ways to write maintainable and
            testable software, learning from folks who have done it at scale. He
            enjoys hacking on every layer of the stack, from designing
            cloud-native architectures, to tuning databases, to designing and
            building web frontends. He loves the process of learning how
            computers work.
          </div>
          <div className={`${styles.indented} ${styles.new_paragraph}`}>
            Currently interested in systems programming (
            <a
              href="https://nycsystems.xyz"
              target="_blank"
              rel="noopener noreferrer">
              https://nycsystems.xyz
            </a>
            ), distributed systems testing tools (
            <a
              href="https://jepsen.io/"
              target="_blank"
              rel="noopener noreferrer">
              Jepsen
            </a>
            ), and new version control systems (
            <a
              href="https://jj-vcs.github.io"
              target="_blank"
              rel="noopener noreferrer">
              jj
            </a>
            ). Concentrations in school were AI & machine learning, and database
            management system internals.
          </div>
          <div className={`${styles.indented} ${styles.new_paragraph}`}>
            <b>nick</b> is a proud father and stepfather.
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
        <span>Nicholas Chaloult</span>
        <span>NICK(1)</span>
      </div>
    </div>
  );
}

export default ManPage;
