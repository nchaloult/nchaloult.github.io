import React, { useState } from 'react';

import Prompt from './Prompt';

import constants from '../utils/constantsAndCommands';

function Shell() {
  let [statements, setStatements] = useState(constants.welcomeMessage);
  let [curInput, setCurInput] = useState('');

  const shellStatementsAsParagraphs = statements.map((statement) => {
    return (
      <p>{ statement }</p>
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
    // Get the first word that was typed, which will be the "program" invoked without its arguments
    const program = command.indexOf(' ') !== -1 ? command.substring(0, command.indexOf(' ')) : command;

    if (program === 'help') {
      return [...statements, mirror, 'Help message', 'Include quick one-liner about yourself, and quick descriptions/explanations of all available commands.'];
    } else if (program === 'clear') {
      return [];
    } else if (command === 'testing') {
      return [...statements, mirror, 'You typed: \'testing\'!'];
    } else if (command === '') {
      // Blank line entered. Just add the mirror
      return [...statements, mirror];
    }

    // User input was not recognized. Add a "command not found" message
    return [...statements, mirror, `Command not found: ${program}. This isn't bash!`];
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
