import React, { createRef, useEffect } from 'react';
import Shell from './Shell';
import styles from './App.module.scss';
import ManPage from './ManPage';

function App() {
  const shellRef = createRef<HTMLDivElement>();

  // Each time a click happens, call checkForShellClick().
  useEffect(() => {
    document.addEventListener('click', checkForShellClick);
    return () => document.removeEventListener('click', checkForShellClick);
  }, []);

  // If a click happened while the mouse was inside the Shell component's
  // container div, then redirect focus onto the Prompt component's input text
  // field.
  //
  // TODO: Properly type e.
  function checkForShellClick(e: any) {
    if (shellRef.current && e.target && shellRef.current.contains(e.target)) {
      document.getElementById('prompt-input-text-field')?.focus();
    }
  }

  return (
    <div id={styles.container}>
      <Shell ref={shellRef} />
      <ManPage />
    </div>
  );
}

export default App;
