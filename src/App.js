import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
// Routes
import * as routes from "./routes/routes";

// Pages
import Forms from "./pages/Forms";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path={routes.ROOT} element={<Forms/>} />
      </Routes>
    </div>
  );
};

export default App;
