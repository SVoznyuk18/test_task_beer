import React from "react";

const Main = ({beers}) => {
    return (
        <ul className="recipesList">
            {
                beers && beers.map((recipe) => (
                    <li className="recipeCard">
                        <p>{recipe?.name}</p>
                        <p>{recipe?.tagline}</p>
                        <p>{recipe?.description}</p>
                    </li>
                ))
            }
        </ul>

    )
}

export default Main;