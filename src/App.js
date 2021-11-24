import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./pages/welcomePage/welcome";
import Main from "./pages/mainPage/main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
