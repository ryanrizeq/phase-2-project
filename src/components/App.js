import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import CocktailPage from "./CocktailPage";
import CocktailForm from "./Form";


function App() {
  const [cocktailData, setCocktailData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
      .then((r) => r.json())
      .then((data) => setCocktailData(data))
  }, [])

  function addNewCocktail(newCocktail) {
    console.log(newCocktail)
  }
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route 
          path="/list"
          element={<CocktailPage list={cocktailData}/>}
        >
        </Route>
        <Route 
          path="/new"
          element={<CocktailForm addNewCocktail={addNewCocktail}/>}
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
