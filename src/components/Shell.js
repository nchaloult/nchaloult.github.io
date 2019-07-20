import React, { useState } from 'react';

import Prompt from './Prompt';

function Shell() {
  let [statements, setStatements] = useState(['I\'m a shell statement']);
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

    // Parse command & add appropriate shell statement
    if (command === 'testing') {
      setStatements([...statements, 'You typed: \'testing\'!']);
    } else {
      // Get the first word that was typed, which will be the "program" invoked without its arguments
      const program = command.indexOf(' ') !== -1 ? command.substring(0, command.indexOf(' ')) : command;

      setStatements([...statements, mirror, `Command not found: ${program}. This isn't bash!`]);
    }

    // Clear curInput, so that prompt comes back blank
    setCurInput('');
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
