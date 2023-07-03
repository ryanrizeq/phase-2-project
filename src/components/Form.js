import React, { useState } from "react";

function CocktailForm () {

    const [formData, setFormData] = useState({
        name: "",
        liqour: "",
        link: ""
    })

    function onSubmit(e) {
        e.preventDefault()
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Add a New Cocktail</h1>
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
                    name="liqour"
                    placeholder="Enter Cocktail Liqour"
                    value={formData.liqour}
                    onChange={handleChange}
                />
                <br />
                <input 
                    type="text"
                    name="link"
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