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
            <p><em>For bartender use only!</em></p>
            <form onSubmit={onSubmit}>
                <label>Cocktail Name</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter Cocktail Name"
                    className="input"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label>Cocktail Liquor</label>
                <input 
                    type="text"
                    name="liquor"
                    placeholder="Enter Cocktail Liquor"
                    className="input"
                    value={formData.liquor}
                    onChange={handleChange}
                />
                <label>Cocktail Image</label>
                <input 
                    type="text"
                    name="image"
                    placeholder="Enter Image Link"
                    className="input"
                    value={formData.link}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input 
                    type="submit"
                    name="Submit New Cocktail"
                    placeholder="Submit"
                    className="submit"
                />
            </form>
        </div>
        
    )
}

export default CocktailForm