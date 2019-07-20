import React, { useState } from 'react';

import Prompt from './Prompt';

import { constants, programs } from '../utils/constantsAndCommands';

function Shell() {
  let [statements, setStatements] = useState(constants.welcomeMessage);
  let [curInput, setCurInput] = useState('');

  const shellStatementsAsParagraphs = statements.map((statement) => {
    return (
      <p key={ statement.toString() }>{ statement }</p>
    );
  });

  const processCommand = (e) => {
    // Don't refresh the web page when the Prompt "form" is submitted
    e.preventDefault()

    // Sanitize input
    const command = curInput.toLowerCase().trim();

    /*
     * Declare the following line to be added to statements. This line mirrors
     * what the user typed, which simulates the behavior of a real shell.
     */
    const mirror = `$ ${command}`;

    // Parse command & add appropriate shell statement
    setStatements(getStatementsArrayForCommand(command, mirror));

    // Clear curInput, so that prompt comes back blank
    setCurInput('');
  };

  /*
   * Helper function for processCommand(). Returns what the new statements
   * array should be, depending on user input.
   */
  const getStatementsArrayForCommand = (command, mirror) => {
    const template = [...statements, mirror];
    let output = template;

    // Handle commands with "special cases" or "unusal behavior"
    if (command === 'clear') {
      return [];
    } else if (command === '') {
      // Blank line entered. Just add the mirror
      return output;
    }

    const args = command.split(' ');
    const program = args.shift();

    if (programs.hasOwnProperty(program)) {
      // The invoked program was recognized

      const response = programs[program];

      if (args.length === 0 && !isPlainObject(response)) {
        // No args provided, program doesn't accept args
        return output.concat(response);
      } else if (args.length > 0 && isPlainObject(response)) {
        // Args provided, program accepts args
        for (const arg of args) {
          if (response.hasOwnProperty(arg)) {
            output = output.concat(response[arg]);
          } else {
            // Arg not recognized. Respond with warning
            return template.concat(arg + constants.argNotRecognizedWarning + program);
          }
        }

        return output;
      } else if (args.length === 0 && isPlainObject(response)) {
        // No args provided, program accepts args
        return output.concat(response['']);
      } else {
        // Args provided, program doesn't accept args. Respond with warning
        return output.concat(program + constants.acceptsNoArgsWarning);
      }
    }

    // Invoked program was not recognized. Respond with "command not found" message
    return output.concat(constants.commandNotFound + program);
  };

  // Helper function to distinguish arrays from plain old javascript objects
  const isPlainObject = (input) => {
    return Object.prototype.toString.call(input) === '[object Object]';
  };

  return (
    <div>
      { shellStatementsAsParagraphs }
      <Prompt
        value={ curInput }
        updateCurInput={ setCurInput } submitCommand={ processCommand }
      />
    </div>
  );
}

export default Shell;
