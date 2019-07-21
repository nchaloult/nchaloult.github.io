import React, { useEffect, useRef } from 'react';

import ManPage from './components/ManPage';
import Shell from './components/Shell';

function App() {
  // References the Shell component's div
  const node = useRef();

  // Each time a click happens, call checkForShellClick
  useEffect(() => {
    document.addEventListener('click', checkForShellClick);

    return () => {
      document.removeEventListener('click', checkForShellClick);
    };
  }, []);

  /*
   * Called each time that a click happens.
   *
   * If the click happens inside of the Shell component's div, then redirect
   * focus onto the Shell component's input text field.
   */
  const checkForShellClick = (e) => {
    if (node.current.contains(e.target)) {
      document.getElementById('prompt-input-form').elements[0].focus();
    }
  };

  return (
    <div id="container">
      <div ref={ node } className="outer-column">
        <div className="inner-column">
          <Shell />
        </div>
      </div>
      <div className="outer-column">
        <div className="inner-column">
          <ManPage />
        </div>
      </div>
    </div>
  );
}

export default App;
