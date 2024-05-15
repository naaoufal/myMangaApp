import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import NavbarComp from './components/NavBar';
import SignInScreen from './screens/SignInScreen';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="">
      <NavbarComp />
      {/* <HomeScreen /> */}
      {/* <SignInScreen /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/SignIn" Component={SignInScreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
