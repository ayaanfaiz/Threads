import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainThread from './components/Main';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // This function blocks the main thread for 5 seconds
    for (let i = 0; i < 5000000000; i++) {
      // Do nothing
    }

    setCount(count + 1);
  };

  return (
    <div>
      {/* <img src='https://media2.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif?cid=6104955ev9k1jn9oysp0vzfe0ss2kx8nlw1kgcqlbg4znpq8&ep=v1_gifs_translate&rid=giphy.gif&ct=g' alt="logo" className='App-logo'/> */}
       
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

  
  // Call the function to simulate the blocking operation
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src='https://media2.giphy.com/media/3o7ZetIsjtbkgNE1I4/giphy.gif?cid=6104955ev9k1jn9oysp0vzfe0ss2kx8nlw1kgcqlbg4znpq8&ep=v1_gifs_translate&rid=giphy.gif&ct=g' alt="logo" className='App-logo'/>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <button onClick={blockMainThread}>Block Main thread</button>
  //     </header>
  //     <MainThread />
  //   </div>
  // );
// }

export default App;
