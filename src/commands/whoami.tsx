import React from 'react';
import { Program } from '.';

export class Whoami implements Program {
  run(args: string[]): JSX.Element {
    if (args.length !== 0) {
      return <span>whoami doesn&apos;t accept any arguments</span>;
    }
    return <span>guest</span>;
  }
}
