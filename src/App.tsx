import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/event-proposal" element={<CreateEventPage />} />
      </Routes>
    </Router>
  );
};

export default App;
