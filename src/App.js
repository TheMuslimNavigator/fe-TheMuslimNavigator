import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import EventsPage from "./pages/eventsPage";
import PrayersPage from "./pages/prayerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/prayerTimes" element={<PrayersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
