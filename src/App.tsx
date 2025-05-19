import React from 'react';
import './App.css';

function App() {
  const currentUrl = window.location.href;
  const isDeployed = !currentUrl.includes('localhost');

  return (
    <>
      {isDeployed ? (
        <>
          <div
            style={{
              width: '100%',
              height: '100px',
              backgroundColor: 'lightgreen',
              marginBottom: '20px',
            }}
          ></div>
          <div className="App">🚀 Deployed!</div>
          <div className="App">{currentUrl}</div>
        </>
      ) : (
        <>
          <div
            style={{
              width: '100%',
              height: '100px',
              backgroundColor: 'orange',
              marginBottom: '20px',
            }}
          ></div>
          <div className="App">🧪 로컬 테스트 중입니다</div>
          <div className="App">{currentUrl}</div>
        </>
      )}
    </>
  );
}

export default App;
