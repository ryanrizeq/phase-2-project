import React from "react";

function CocktailRender({ name, img, liquor }) {
    return(
        <div className="tile">
            <h3>{name}</h3>
            <img src={img} alt="drink" className="pics" />
            <p><em>Liquor: {liquor}</em></p>
        </div>
    )
}

export default CocktailRender