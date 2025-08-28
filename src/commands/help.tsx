import { type JSX } from "react";
import { AcceptsNoArgsError, type Program } from ".";
import { getRandomKey } from "../utils";

export default class Help implements Program {
  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      throw new AcceptsNoArgsError();
    }

    return (
      <div key={getRandomKey()} className="flex flex-col">
        <b>How to Use Commands</b>
        <b>===================</b>
        <p>
          Type <b className="text-gruvbox-teal">nick -a</b>, then press Enter.
        </p>
        <p className="mt-4">
          <b className="text-gruvbox-teal">nick</b> is the program you&apos;re
          invoking, and <b className="text-gruvbox-teal">-a</b> is an option
          that sends specific instructions to that program.
        </p>
        <p className="mt-4">
          You can provide more than one option at a time. Try running:
        </p>
        <ul className="ml-8">
          <li>
            - <b className="text-gruvbox-teal">nick -egl</b>
          </li>
          <li>
            - <b className="text-gruvbox-teal">nick --linkedin --resume</b>
          </li>
          <li>- etc.</li>
        </ul>
        <b className="mt-4">Available Programs</b>
        <b>==================</b>
        {/* TODO: Make this content dynamic based on the `programs` map in
        index.tsx */}
        <b className="text-gruvbox-teal">clear</b>
        <b className="text-gruvbox-teal">fortune</b>
        <b className="text-gruvbox-teal">help</b>
        <b className="text-gruvbox-teal">nick</b>
        <b className="text-gruvbox-teal">whoami</b>
      </div>
    );
  }
}
