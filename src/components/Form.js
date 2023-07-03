import React from "react";

function CocktailForm () {
    function onSubmit(e) {
        e.preventDefault()
    }
    
    return (
        <div>
            <h1>Add a New Cocktail</h1>
            <form onSubmit={onSubmit}>
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
                    placeholder="Enter Cocktail Image"
                />
                <br />
                <input 
                    type="submit"
                    name="Submit New Cocktail"
                    placeholder="Submit"
                />
            </form>
        </div>
        
    )
}

export default CocktailForm