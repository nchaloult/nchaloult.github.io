import React, { Fragment } from 'react';
import { Program } from '.';
import { getRandomKey } from '../utils';

export default class Nick implements Program {
  run(options: Set<string>): JSX.Element {
    if (options.size === 0) {
      return <span key={getRandomKey()}>Provide some options, like: -a</span>;
    }

    const lines: JSX.Element[] = [];
    // Can't use options.forEach() because we need to be able to fail fast and
    // return from run() early in some cases.
    for (const option of Array.from(options)) {
      switch (option) {
        case 'a':
        case 'all':
          lines.push(this.getEmailOptionContent());
          lines.push(this.getGithubOptionContent());
          lines.push(this.getLinkedInOptionContent());
          lines.push(this.getResumeOptionContent());
          break;
        case 'e':
        case 'email':
          lines.push(this.getEmailOptionContent());
          break;
        case 'g':
        case 'github':
          lines.push(this.getGithubOptionContent());
          break;
        case 'i':
        case 'interests':
          lines.push(this.getInterestsOptionContent());
          break;
        case 'l':
        case 'linkedin':
          lines.push(this.getLinkedInOptionContent());
          break;
        case 'r':
        case 'resume':
          lines.push(this.getResumeOptionContent());
          break;
        default: {
          // If we don't recognize one of the provided options, mimic the
          // behavior of most real shell programs by failing completely. Ignore
          // the lines we've added to the `lines` array and display an error
          // message.
          let badOption;
          if (option.length > 1) {
            badOption = `--${option}`;
          } else {
            badOption = `-${option}`;
          }
          return (
            <span key={getRandomKey()}>
              {badOption} isn&apos;t recognized or supported by: nick
            </span>
          );
        }
      }
    }

    return (
      <Fragment key={getRandomKey()}>
        {lines.map((line) => (
          <Fragment key={getRandomKey()}>{line}</Fragment>
        ))}
      </Fragment>
    );
  }

  private getEmailOptionContent(): JSX.Element {
    return <span>npchaloult@gmail.com</span>;
  }

  private getGithubOptionContent(): JSX.Element {
    return (
      <a
        href="https://github.com/nchaloult"
        target="_blank"
        rel="noopener noreferrer">
        https://github.com/nchaloult
      </a>
    );
  }

  private getInterestsOptionContent(): JSX.Element {
    return (
      <span>
        Rust, distributed systems, maintainable and testable software, free and
        open-source software
      </span>
    );
  }

  private getLinkedInOptionContent(): JSX.Element {
    return (
      <a
        href="https://linkedin.com/in/nchaloult"
        target="_blank"
        rel="noopener noreferrer">
        https://linkedin.com/in/nchaloult
      </a>
    );
  }

  private getResumeOptionContent(): JSX.Element {
    return (
      <a
        // TODO: Make this more modular or easy to change in the future.
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        target="_blank"
        rel="noopener noreferrer">
        Click to view resume
      </a>
    );
  }
}
