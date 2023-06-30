import React from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import CocktailPage from "./CocktailPage";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route 
          path="/list"
          element={<CocktailPage />}
        >
        </Route>
      </Routes>
      <h1>The CocktaiList</h1>
    </div>
  );
}

export default App;
