import React from "react";
import CocktailRender from "./CocktailRender";

function CocktailPage( { list }) {
    return (
        <div>
            <h1>Cocktail Page</h1>
            {list.map((drink) => {
                <CocktailRender />
            })}
        </div>
        
    )
}

export default CocktailPage