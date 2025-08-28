import type { JSX } from "react";
import { AcceptsNoArgsError, type Program } from ".";
import { getRandomKey } from "../utils";

export default class Whoami implements Program {
  run(options: Set<string>): JSX.Element {
    if (options.size !== 0) {
      throw new AcceptsNoArgsError();
    }

    return <span key={getRandomKey()}>guest</span>;
  }
}
