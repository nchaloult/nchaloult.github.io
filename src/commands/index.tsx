import { Fragment, type JSX } from "react";
import Clear from "./clear";
import Fortune from "./fortune";
import Help from "./help";
import Nick from "./nick";
import Whoami from "./whoami";
import { getRandomKey } from "../utils";

export class AcceptsNoArgsError extends Error {}

export interface Program {
  run(options: Set<string>): JSX.Element;
}

// Associates program names with their corresponding Program objects. Used by
// parseCommand() to invoke the right program.
const programs: { [name: string]: Program } = {
  clear: new Clear(),
  fortune: new Fortune(),
  help: new Help(),
  nick: new Nick(),
  whoami: new Whoami(),
};

// Parses user input and returns a new piece of JSX to render to the Shell as a
// response.
//
// This function expects cmd to be non-empty. The Shell component should be
// responsible for handling the case where the user just presses Enter without
// typing a new command in.
//
// Ex: cmd = "nick -a"
export function parseCommand(cmd: string): JSX.Element {
  let programName = cmd;
  const firstSpaceIdx = cmd.indexOf(" ");
  if (firstSpaceIdx !== -1) {
    programName = cmd.substring(0, firstSpaceIdx);
  }

  if (!(programName in programs)) {
    return <span key={getRandomKey()}>Command not found: {programName}</span>;
  }

  let args = cmd.substring(firstSpaceIdx + 1).trim();
  if (firstSpaceIdx === -1) {
    // No args were provided, but because firstSpaceIdx is -1, args is currently
    // equal to the program name. Passing that into the parseArgs() func would
    // mess things up.
    args = "";
  }

  try {
    const options = parseArgs(args);
    try {
      return programs[programName].run(options);
    } catch (e) {
      if (e instanceof AcceptsNoArgsError) {
        return (
          <span key={getRandomKey()}>
            {programName} doesn&apos;t accept any arguments
          </span>
        );
      }
      // We should never reach this point, but just in case...
      return (
        <Fragment key={getRandomKey()}>
          <span>Something went wrong while running {programName}:</span>
          <b>{String(e)}</b>
        </Fragment>
      );
    }
  } catch (e) {
    return (
      <span key={getRandomKey()}>Invalid argument: {getErrorMessage(e)}</span>
    );
  }
}

// Parses the command line arguments that were provided with a command, and
// returns a set of the corresponding options.
//
// Throws an Error if an arg is invalid or malformed, like if it doesn't begin
// with a '-'. The body of that Error is the invalid section that caused it.
//
// Ex: args: '-f' -> ['f']
// Ex: args: '-f -o' -> ['f', 'o']
// Ex: args: '-f -o -o' -> ['f', 'o']
// Ex: args: '-fo' -> ['f', 'o']
// Ex: args: '--foo' -> ['foo']
// Ex: args: '--foo -o' -> ['foo', 'o']
function parseArgs(args: string): Set<string> {
  const options = new Set<string>();
  if (args.length === 0) {
    return options;
  }

  // Spaces separate sections, so a section is one chunk of options.
  //
  // Ex: '-f'
  // Ex: '-fo'
  // Ex: '--foo'
  const sections = args.split(" ");
  for (const section of sections) {
    if (!section.startsWith("-") || section === "-" || section === "--") {
      throw new Error(section);
    }

    if (section.startsWith("--")) {
      // This section is a long-form one, like '--foo'.

      for (let i = 2; i < section.length; i++) {
        // Don't allow rogue '-' chars in the middle of a section, like
        // '--fo-o'.
        if (section.charAt(i) === "-") {
          throw new Error(section);
        }
      }

      options.add(section.substring(2));
    } else if (section.startsWith("-")) {
      // This section is a short-form one, like '-f'.

      for (let i = 1; i < section.length; i++) {
        const curChar = section.charAt(i);
        // Don't allow rogue '-' chars in the middle of a section, like '-fo-o'.
        if (curChar === "-") {
          throw new Error(section);
        }

        options.add(curChar);
      }
    }
  }

  return options;
}

// Helper function to help us get around Error objects being of type 'unknown'
// in catch clauses.
//
// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
