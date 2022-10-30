import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
