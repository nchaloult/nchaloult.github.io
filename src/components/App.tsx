import React from 'react';
import Shell from './Shell';
import styles from './App.module.scss';
import ManPage from './ManPage';

function App() {
  return (
    <div id={styles.container}>
      <Shell />
      <ManPage />
    </div>
  );
}

export default App;
