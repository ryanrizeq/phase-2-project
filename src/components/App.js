import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import CocktailPage from "./CocktailPage";
import CocktailForm from "./Form";
import Home from "./Home";


function App() {
  const [cocktailData, setCocktailData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
      .then((r) => r.json())
      .then((data) => setCocktailData(data))
  }, [])

  function addNewCocktail(newCocktail) {
    fetch("http://localhost:3000/cocktails", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newCocktail)
    })
      .then((r) => r.json())
      .then((data) => {
        setCocktailData([...cocktailData, data])
      })
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
        <Route 
          path="/"
          element={<Home />}
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
