import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import MainPage from './component/MainPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useSelector , useDispatch } from 'react-redux';


import {useState } from 'react';

function App() {


 

 
    return (
    <Provider store = {store}>
      <div className="App">
          <MainPage/>
      </div>    
    </Provider>
  );
}

export default App;
