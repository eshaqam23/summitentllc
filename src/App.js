import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const [tab, setTab] = useState("home");
  let data;

  switch(tab) {
    case "home":
      data = <Home />;
      break;
    case "about":
      data = <About />;
      break;
    case "contact":
      data = <Contact />;
      break;
    default:
      data = <Home />;
      break;
  }

  return (
    <div>
      <header>
          <div className="innerHeader">
              <div className="leftHeader">
                <div className="logo">
                    <img src="../../summit.png" />
                    <h2>Summit Enterprises, LLC</h2>
                </div>
              </div>
              <nav>
                  <button onClick={() => setTab("home")} className="navigation" id="home">Home</button>
                  <button onClick={() => setTab("home")} className="navigation">About</button>
                  <button onClick={() => setTab("home")} className="navigation">Contact</button>
              </nav>
          </div>
      </header>
      {data}
    </div>
  );
}

export default App;
