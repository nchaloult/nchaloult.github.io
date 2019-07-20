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
      setStatements([...statements, 'You didn\'t type: \'testing\'!']);
    }
  };

  return (
    <div>
      { shellStatementsAsParagraphs }
      <Prompt updateCurInput={ setCurInput } submitCommand={ processCommand } />
    </div>
  );
}

export default Shell;
