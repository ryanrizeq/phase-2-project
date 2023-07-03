import React from "react";

function CocktailForm () {
    return (
        <div>
            <h1>Add a New Cocktail</h1>
            <form>
                <input 
                    type="text"
                    name="Cocktail Name"
                    placeholder="Enter Cocktail Name"
                />
                <br />
                <input 
                    type="text"
                    name="Cocktail Liqour"
                    placeholder="Enter Cocktail Liqour"
                />
                <br />
                <input 
                    type="text"
                    name="Cocktail Image Link"
                    placeholder="Enter Cocktail Image Link"
                />
            </form>
        </div>
        
    )
}

export default CocktailForm