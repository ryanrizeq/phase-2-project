import React from "react";

function CocktailRender({ name, img, liquor }) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{img}</p>
            <p>{liquor}</p>
        </div>
    )
}

export default CocktailRender