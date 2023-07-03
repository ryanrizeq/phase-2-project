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

    function handleNameChange(e) {
        setFormData({
            ...formData,
            name: e.target.value
        })
    }

    function handleLiqourChange(e) {
        setFormData({
            ...formData,
            liqour: e.target.value
        })
    }

    function handleLinkChange(e) {
        setFormData({
            ...formData,
            link: e.target.value
        })
    }

    return (
        <div>
            <h1>Add a New Cocktail</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="Cocktail Name"
                    placeholder="Enter Cocktail Name"
                    value={formData.name}
                    onChange={handleNameChange}
                />
                <br />
                <input 
                    type="text"
                    name="Cocktail Liqour"
                    placeholder="Enter Cocktail Liqour"
                    value={formData.liqour}
                    onChange={handleLiqourChange}
                />
                <br />
                <input 
                    type="text"
                    name="Cocktail Image Link"
                    placeholder="Enter Cocktail Image"
                    value={formData.link}
                    onChange={handleLinkChange}
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