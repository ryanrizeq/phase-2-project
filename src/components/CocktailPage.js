import React from "react";
import CocktailRender from "./CocktailRender";

function CocktailPage( { list }) {
    return (
        <div>
            <h1>Cocktail Résumé</h1>
            {list.map((drink) => (
                <CocktailRender
                    key = {drink.name}
                    name = {drink.name}
                    img = {drink.image}
                    liquor = {drink.liquor}
                />
            ))}
        </div>
        
    )
}

export default CocktailPage