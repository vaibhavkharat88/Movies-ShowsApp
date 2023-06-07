import React from 'react';
import './App.scss';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import MovieDetails from './components/movieDetails/MovieDetails';
import PageNotFound from './components/pageNotFound/PageNotFound'
import Footer from './components/footer/Footer';

function App() {
  return (
  <>
  <div className="app">
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
        <Route  element={<PageNotFound/>}/>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
  </>
  );
}

export default App;
