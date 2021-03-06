import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './Header/Header2.js';
import SpaceTop from './SpaceTop/SpaceTop'
import Tech from "./Tech/Tech";
import Experience from "./Experience/Experience";
import RH from "./RH/RH";

ReactDOM.render(
  <React.StrictMode>
      <SpaceTop/>
      <Header/>
      {/*<RH/>*/}
      {<RH/>}
      <Experience/>
      <Tech/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
function tick() {
    const element = (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
}*/

//setInterval(tick, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
