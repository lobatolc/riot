import './App.css';
import React, { useState, useEffect} from 'react';
import {GetGitHub} from "./controller/request"
import Header from './pages/header/header'
import RuinedKing from './pages/ruinedking/king'
import Grid from './pages/grid/grid'
import Form from './pages/form/form'
function App() {

  return(
    <>
      <Header/>
      <RuinedKing/>
      <Grid/>
      <Form/>
    </>
  )
}

export default App;
