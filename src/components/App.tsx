import React, { createRef, useEffect, useState } from 'react';
import Shell from './Shell';
import styles from './App.module.scss';
import ManPage from './ManPage';

function App() {
  const shellRef = createRef<HTMLDivElement>();
  const [isHintOnMobileVisible, setIsHintOnMobileVisible] = useState(true);

  useEffect(() => {
    // Each time a click happens, call checkForShellClick().
    document.addEventListener('click', checkForShellClick);

    // Each time a keypress happens, hide the hint on mobile (if it's visible).
    //
    // This is necessary because some mobile devices can have keyboards attached
    // (think: iPads). In that case, the HintOnMobile will be visible, but the
    // shell prompt (prompt-input-text-field) will be focused. The user could
    // be typing away, entering commands, and the HintOnMobile would still be
    // visible in the middle of the screen.
    document.addEventListener('keypress', removeHintOnMobileIfVisible);

    return () => {
      document.removeEventListener('click', checkForShellClick);
      document.removeEventListener('keypress', removeHintOnMobileIfVisible);
    };
  }, []);

  // If a click happened while the mouse was inside the Shell component's
  // container div, then redirect focus onto the Prompt component's input text
  // field.
  //
  // TODO: Properly type e.
  function checkForShellClick(e: any) {
    if (shellRef.current && e.target && shellRef.current.contains(e.target)) {
      document.getElementById('prompt-input-text-field')?.focus();

      // On mobile, the first time the Shell component is touched, the hint on
      // mobile should disappear. It should never reappear, so there is no path
      // for this variable to be set back to true.
      setIsHintOnMobileVisible(false);
    }
  }

  // TODO: Properly type e.
  function removeHintOnMobileIfVisible(e: any) {
    if (isHintOnMobileVisible) {
      setIsHintOnMobileVisible(false);
    }
  }

  return (
    <div id={styles.container}>
      <Shell ref={shellRef} isHintOnMobileVisible={isHintOnMobileVisible} />
      <ManPage />
    </div>
  );
}

export default App;
