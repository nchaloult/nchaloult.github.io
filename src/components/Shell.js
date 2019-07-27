import React, { useState, useEffect } from 'react';

import Prompt from './Prompt';

import { constants, programs } from '../utils/constantsAndCommands';
import pdf from '../resume.pdf';

function Shell() {
  let [statements, setStatements] = useState(constants.welcomeMessage);
  let [curInput, setCurInput] = useState('');
  let [prevCommands, setPrevCommands] = useState(['']);
  let [prevCommandsIndex, setPrevCommandsIndex] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', checkForArrowKeyPressed);

    return () => {
      document.removeEventListener('keydown', checkForArrowKeyPressed);
    };
  });

  /*
   * Called each time a key is pressed. If the pressed key is either the up or
   * down arrow key, then move through the shell's input history.
   *
   * Based on current spot in the history, change the contents of the shell
   * input text field to simulate scrolling through the history of entered
   * commands.
   */
  const checkForArrowKeyPressed = (e) => {
    const pressedKey = e.key;

    if (pressedKey === 'ArrowUp') {
      if (prevCommandsIndex >= prevCommands.length) {
        // Set the shell input text field's contents
        setCurInput(prevCommands[prevCommands.length - 1]);

        setPrevCommandsIndex(prevCommands.length - 1);
      } else {
        // Set the shell input text field's contents
        setCurInput(prevCommands[prevCommandsIndex]);

        setPrevCommandsIndex(prevCommandsIndex + 1);
      }
    } else if (pressedKey === 'ArrowDown') {
      if (prevCommandsIndex <= 0) {
        // Set the shell input text field's contents
        setCurInput(prevCommands[0]);

        setPrevCommandsIndex(0);
      } else {
        // Set the shell input text field's contents
        setCurInput(prevCommands[prevCommandsIndex]);

        setPrevCommandsIndex(prevCommandsIndex - 1);
      }
    }
  };

  const shellStatementsAsParagraphs = statements.map((statement) => {
    // Make URL responses hyperlinks
    if (statement.substring(0, 4) === 'http') {
      return (
        <a href={ statement }>{ statement }</a>
      );
    }

    // Handle special "resume" command by linking to file
    if (statement === constants.resumeResponse) {
      return (
        <a href={ pdf } target="_blank" rel="noopener noreferrer">{ statement }</a>
      );
    }

    return (
      <p key={ statement.toString() }>{ statement }</p>
    );
  });

  const processCommand = (e) => {
    // Don't refresh the web page when the Prompt "form" is submitted
    e.preventDefault()

    // Sanitize input
    const command = curInput.toLowerCase().trim();

    // Push input onto prevCommands stack for retrieval w/ arrow keys
    if (command !== '' && prevCommands.length > 0 && command !== prevCommands[0]) {
      setPrevCommands([command, ...prevCommands]);
    }

    // Reset prevCommandsIndex, since the command history has changed
    setPrevCommandsIndex(0);

    /*
     * Declare the following line to be added to statements. This line mirrors
     * what the user typed, which simulates the behavior of a real shell.
     */
    const mirror = constants.prompt + ' ' + command;

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
    if (command.indexOf(' ') !== -1 && command.includes('-help')) {
      /*
       * If any command contains a variaion of the "help" argument
       * (-help, --help), then respond with the main help response.
       */
      return output.concat(programs.help);
    } else if (command === 'clear') {
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
