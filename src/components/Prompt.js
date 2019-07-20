import React from 'react';

function Prompt(props) {
  return (
    <div id="prompt">
      <div>
        <p>$</p>
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
