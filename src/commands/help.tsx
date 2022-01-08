import React from 'react';
import { AcceptsNoArgsError, Program } from '.';

export default class Help implements Program {
  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      throw new AcceptsNoArgsError();
    }

    return (
      <>
        <br />
        <span>How to Use Commands</span>
        <span>===================</span>
        <span>Type &quot;nick -a&quot;, then press Enter.</span>
        <br />
        <span>
          &quot;nick&quot; is the program you&apos;re invoking, and
          &quot;-a&quot; is an option that sends specific instructions to that
          program.
        </span>
        <br />
        <span>
          You can provide more than one option at a time. Try running:
        </span>
        <span>&nbsp;&nbsp;- &quot;nick -egl&quot;</span>
        <span>&nbsp;&nbsp;- &quot;nick --linkedin --resume&quot;</span>
        <span>&nbsp;&nbsp;- etc.</span>
        <br />
        <span>Available Programs</span>
        <span>==================</span>
        {/* TODO: Make this content dynamic based on the `programs` map in
        index.tsx */}
        <span>help</span>
        <span>whoami</span>
      </>
    );
  }
}
