import React from 'react';

import Shell from './components/Shell';

function App() {
  return (
    <div id="container">
      <div className="outer-column" style={{'background': "#cccccc"}}>
        <div className="inner-column">
          <Shell />
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
