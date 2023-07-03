import React, { useState } from "react";

function CocktailForm ({ addNewCocktail }) {

    const [formData, setFormData] = useState({
        name: "",
        liquor: "",
        image: ""
    })

    function onSubmit(e) {
        e.preventDefault()
        addNewCocktail(formData)
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 className="accent">Add a New Cocktail</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter Cocktail Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br />
                <input 
                    type="text"
                    name="liquor"
                    placeholder="Enter Cocktail Liqour"
                    value={formData.liquor}
                    onChange={handleChange}
                />
                <br />
                <input 
                    type="text"
                    name="image"
                    placeholder="Enter Cocktail Image"
                    value={formData.link}
                    onChange={handleChange}
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