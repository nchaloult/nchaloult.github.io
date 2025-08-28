import { Fragment, type JSX } from "react";
import { AcceptsNoArgsError, type Program } from ".";
import { getRandomKey } from "../utils";

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
          Type <b className="text-gruvbox-teal">nick -a</b>, then press Enter.
        </span>
        <br />
        <span>
          <b className="text-gruvbox-teal">nick</b> is the program you&apos;re
          invoking, and <b className="text-gruvbox-teal">-a</b> is an option
          that sends specific instructions to that program.
        </span>
        <br />
        <span>
          You can provide more than one option at a time. Try running:
        </span>
        <span>
          &nbsp;&nbsp;- <b className="text-gruvbox-teal">nick -egl</b>
        </span>
        <span>
          &nbsp;&nbsp;-{" "}
          <b className="text-gruvbox-teal">nick --linkedin --resume</b>
        </span>
        <span>&nbsp;&nbsp;- etc.</span>
        <br />
        <b>Available Programs</b>
        <b>==================</b>
        {/* TODO: Make this content dynamic based on the `programs` map in
        index.tsx */}
        <b className="text-gruvbox-teal">clear</b>
        <b className="text-gruvbox-teal">fortune</b>
        <b className="text-gruvbox-teal">help</b>
        <b className="text-gruvbox-teal">nick</b>
        <b className="text-gruvbox-teal">whoami</b>
      </Fragment>
    );
  }
}
