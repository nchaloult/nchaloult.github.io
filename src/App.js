import React from 'react';

import Shell from './components/Shell';

function App() {
  return (
    <div id="container">
      <div className="outer-column">
        <div className="inner-column">
          <Shell />
        </div>
      </div>
      <div className="outer-column">
        <div className="inner-column">
          <p>Placeholder text. A bio, summary, your résumé, or something else could go here.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
