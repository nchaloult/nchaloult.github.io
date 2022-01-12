import { AcceptsNoArgsError, Program } from '.';

// This program only needs to be here so that if somebody tries to invoke it
// with options, the proper error message is displayed ("clear doesn't accept
// any arguments" or whatever).
export default class Clear implements Program {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  run(_options: Set<string>): JSX.Element {
    throw new AcceptsNoArgsError();
  }
}
