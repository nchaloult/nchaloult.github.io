import React from 'react';

import { constants } from '../utils/constantsAndCommands';

function Prompt(props) {
  return (
    <div id="prompt">
      <div>
        <p>{ constants.prompt }</p>
      </div>
      <div id="shell-input">
        <form onSubmit={ props.submitCommand }>
          <input
            autoFocus={ true }
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            type="text"
            value={ props.value }
            onChange={ (e) => props.updateCurInput(e.target.value) }
          />
        </form>
      </div>
    </div>
  );
}

export default Prompt;
