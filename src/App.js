import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import EventsPage from "./pages/eventsPage";
import PrayersPage from "./pages/prayerPage";

import CustomNavbar from './components/CustomNavbar';
import CardGrid from './components/CardGrid';


const App = () => {
  return (
    <>
      <CustomNavbar />
      <div style={{ marginTop: '100px' }}>
        <CardGrid />
        <div style={{ paddingTop: '20px' }}>
          <CardGrid />
        </div>
      </div>
    </>
  );
};

export default App;

