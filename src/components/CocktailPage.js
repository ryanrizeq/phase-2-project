import React from "react";
import CocktailRender from "./CocktailRender";

function CocktailPage( { list }) {
    return (
        <div>
            <h1 className="accent">Cocktail Résumé</h1>
            <p>Peruse this list for your next cocktail. All specially made by me, your bartender!</p>
            <div className="grid">
                {list.map((drink) => (
                    <CocktailRender
                        key = {drink.name}
                        name = {drink.name}
                        img = {drink.image}
                        liquor = {drink.liquor}
                    />
                ))}
            </div>
            
        </div>
        
    )
}

export default CocktailPage