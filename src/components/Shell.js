import React, { useState, useEffect } from 'react';

import Prompt from './Prompt';

import { constants, programs } from '../utils/constantsAndCommands';

function Shell() {
  let [statements, setStatements] = useState([ constants.welcomeMessage ]);
  let [curInput, setCurInput] = useState('');
  let [prevCommands, setPrevCommands] = useState(['']);
  let [prevCommandsIndex, setPrevCommandsIndex] = useState(0);

  const space = "\xa0";

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
    // Handle responses with "special cases" or "unusual behavior"
    if (statement.includes(constants.prompt)) {
      // Separate the prompt from the user input
      const indexOfFirstSpace = statement.indexOf(' ');
      const prompt = statement.substring(0, indexOfFirstSpace);
      statement = statement.substring(indexOfFirstSpace);

      // Make prompt bold
      statement = (
        <span>
          <b>{ prompt }</b> { statement }
        </span>
      );
    } else if (statement.substring(0, 4) === 'http') {
      // Make URL responses hyperlinks
      statement = (
        <a href={ statement } target="_blank" rel="noopener noreferrer">{ statement }</a>
      );
    } else if (statement === constants.resumeResponse) {
      // Make a hyperlink that opens resume PDF
      statement = (
        <a href={ process.env.PUBLIC_URL + '/' + constants.resumeFileName } target="_blank" rel="noopener noreferrer">{ statement }</a>
      );
    } else if (statement === '') {
      /*
      When rendering lines from constantsAndCommands, some lines may be empty
      strings (the "help" command's content has some blank lines). <p> tags
      with no content inside won't render at all, so we need to render blank
      lines as <p> tags with a "space" character inside of them to simulate
      blank lines.
      */
      statement = space;
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
    if ( command === 'help'
      || (command.indexOf(' ') !== -1 && command.includes('-help')) ) {
      /*
       * If the "help" command is entered, or if any command contains a
       * variaion of the "help" argument (-help, --help), then respond with the
       * main help response.
       */
      output = output.concat(constants.availableCommandsMessage);

      for (const program of Object.keys(programs)) {
        output = output.concat(program);

        if (isPlainObject(programs[program])) {
          // If the current program accepts arguments
          for (const arg of Object.keys(programs[program])) {
            // Skip over no-arg ("''") keys
            if (arg !== '') {
              output = output.concat(space + space + arg);
            }
          }
        }
      }

      return output;
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

      if (args.length === 1 && args[0].length > 2
        && (args[0].match(/-/g) || []).length === 1) {
        /*
         * If multiple one-letter args are included together (e.g. nick -neg),
         * then process them all.
         */

        // Remove '-' at the beginning of the arg, so the loop below goes through each letter
        const multiArg = args[0].substring(1);

        for (const c of multiArg) {
          // Attach '-' onto each arg in multiArg so that it will match a key in programs
          const curArg = '-' + c;

          if (response.hasOwnProperty(curArg)) {
            output = output.concat(response[curArg]);
          } else {
            // Arg not recognized. Respond with warning
            return template.concat(curArg + constants.argNotRecognizedWarning + program);
          }
        }

        return output;
      } else if (args.length === 0 && !isPlainObject(response)) {
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
