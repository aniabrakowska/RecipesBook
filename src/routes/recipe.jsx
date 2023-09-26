import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeSingle from "../components/RecipeSingle/RecipeSingle";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";


const Recipe = () => {
    
    const { recipeId } = useParams()
    const [recipes, setRecipes ] = useState([]);

    useEffect(
        () => onSnapshot(collection(db,"Przepisy"), (snapshot) => 
        setRecipes(snapshot.docs.map((doc) => doc.data() )),
        []
        )
    );

    const currentRecipe = recipes.filter(recipe => recipe.id === recipeId);

    return(
        <>
            {currentRecipe.map(recipe => (
                <RecipeSingle key={recipe.id} {...recipe} />
            ))}
        </>
    )

}

export default Recipe;