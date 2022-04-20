import React from "react";
import HomeView from "./views/HomeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
