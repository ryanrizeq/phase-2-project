import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import CocktailPage from "./CocktailPage";


function App() {
  const [cocktailData, setCocktailData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
      .then((r) => r.json())
      .then((data) => setCocktailData(data))
  })
  
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
    </div>
  );
}

export default App;
