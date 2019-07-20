import React, { useState } from 'react';

function Shell() {
  let [statements, setStatements] = useState(['I\'m a shell statement']);

  let shellStatementsAsParagraphs = statements.map((statement) => {
    return (
      <p>{ statement }</p>
    );
  });

  return (
    <div>
      { shellStatementsAsParagraphs }
      <button onClick={() => { setStatements([...statements, 'Another shell statement']) }}>Add a new statement</button>
    </div>
  );
}

export default Shell;
