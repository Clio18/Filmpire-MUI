/* eslint-disable react/jsx-filename-extension */
import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from '../styles';
import Actors from './Actors/Actors';
import MovieInformation from './MovieInformation/MovieInformation';
import Movies from './Movies/Movies';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import useAlan from './Alan';

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
