import React, { useEffect, useState } from "react";
import RecipesItem from "./RecipesItem/RecipesItem";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

const RecipesWrapper = ( {category} ) => {

    const [recipes, setRecipes ] = useState([]);

    useEffect(
        () => onSnapshot(collection(db,"Przepisy"), (snapshot) => 
        setRecipes(snapshot.docs.map((doc) => doc.data() )),
        []        
        )
    );

    const filteredRecipes = category ? recipes.filter(recipe => recipe.category === category) : recipes;

    return(
        <>
            <h2>{category} recipes list:</h2>
            <ul style={ { display: 'flex', flexWrap: 'wrap' } }>
                {
                    filteredRecipes.map(recipe => (
                            <RecipesItem
                                key={recipe.id}
                                { ...recipe}
                            />
                    ))
                }
            </ul>
        </>
    );
    
};

export default RecipesWrapper;