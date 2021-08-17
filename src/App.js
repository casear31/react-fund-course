import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';

function App() {
  
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>
            JavaScript - is the capital of Great Britain
          </div>
        </div>
        <div className="post__btns ">
          <button>Delete post</button>
        </div>

      </div>
    
    </div>
  );
}

export default App;
