import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./containers/HomePage/HomePage"
import Toolbar from './ui/Toolbar/Toolbar';
import Blog from "./containers/BlogPage/BlogPage";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Toolbar></Toolbar>
      <Route path="/" component={Home} exact></Route>
      <Route path="/blog" component={Blog} exact></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
