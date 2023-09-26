import React from "react";
import { Link } from "react-router-dom";
import CategoryImage from "../CategoryImage/CategoryImage";

import style from './RecipesList.module.scss';

const RecipesList = ( {categoryId, recipes } ) => {

    const filteredRecipes = categoryId ? recipes.filter(recipe => recipe.category === categoryId) : recipes;

    return(
        <>
            <div className={style.categoryInfo}>
                <div className={style.categoryImage}>
                    <CategoryImage categoryId={categoryId} />
                </div>
            </div>
            <div className={style.categoryRecipes}>
                {
                    filteredRecipes.map(recipe => (
                        <div key={`recipe-${recipe.id}`} className={style.recipeItem}>
                            <Link to={`/recipe/${recipe.id}`} className={style.recipeContainer}>
                                <img src={recipe.image} alt={recipe.name} className={style.recipeImage}/>
                                <h2 className={style.recipeName}>{recipe.name}</h2>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
    
};

export default RecipesList;