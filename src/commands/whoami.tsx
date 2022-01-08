import React from 'react';
import { Program } from '.';

export class Whoami implements Program {
  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      return <span>whoami doesn&apos;t accept any arguments</span>;
    }
    return <span>guest</span>;
  }
}
