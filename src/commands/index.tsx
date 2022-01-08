import React from 'react';

export interface Program {
  run(args: string[]): JSX.Element;
}

// Associates program names with their corresponding Program objects. Used by
// parseCommand() to invoke the right program.
const programs: { [name: string]: Program } = {};

// Parses user input and returns a new piece of JSX to render to the Shell as a
// response.
//
// This function expects cmd to be non-empty. The Shell component should be
// responsible for handling the case where the user just presses Enter without
// typing a new command in.
//
// Ex: cmd = "nick -a"
export function parseCommand(cmd: string): JSX.Element {
  // Strip out the program name.
  let programName = cmd;
  const firstSpaceIdx = cmd.indexOf(' ');
  if (firstSpaceIdx !== -1) {
    programName = cmd.substring(0, firstSpaceIdx);
  }

  // Invoke the corresponding program.

  if (!(programName in programs)) {
    return <span>Command not found: {programName}</span>;
  }

  let args = cmd.substring(firstSpaceIdx + 1).split(' ');
  if (firstSpaceIdx === -1) {
    args = [];
  }

  return programs[programName].run(args);
}
