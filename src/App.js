import React from 'react';

function App() {
  return (
    <div id="container">
      <div className="outer-column" style={{'background': "#cccccc"}}>
        <div className="inner-column">
          <p>the quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="outer-column" style={{'background': "#eeeeee"}}>
        <div className="inner-column">
          <p>Testing right</p>
        </div>
      </div>
    </div>
  );
}

export default App;
