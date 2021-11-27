import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import Welcome from "./pages/welcomePage/welcome";
import Main from "./pages/mainPage/main";
//Ola
function App() {
  return (
    <>
     <Provider store={store}>
      <Router>
        <Routes>
         
          <Route path="/" element={<Welcome/>} />
          <Route path="/main" element={<Main/>} />
         
        </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;
