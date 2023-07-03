import React from "react";

function CocktailRender({ name, img, liquor }) {
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt="drink" className="pics" />
            <p>{liquor}</p>
        </div>
    )
}

export default CocktailRender