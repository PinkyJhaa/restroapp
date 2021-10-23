import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Restrocafe from './Components/Restrocafe/Restrocafe';
import Counter from './Components/counter';
import JsFolder from './Components/JsFolder';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Switch>
        <div className="app-container">
          {/* <NavBar/> */}
          <Restrocafe/>
          {/* <Counter/> */}
          {/* <JsFolder/> */}
        </div>
      </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
