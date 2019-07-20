import React from 'react';

function Prompt(props) {
  return (
    <div>
      <form onSubmit={ props.submitCommand }>
        <input type="text" onChange={ (e) => props.updateCurInput(e.target.value) } />
      </form>
    </div>
  );
}

export default Prompt;
