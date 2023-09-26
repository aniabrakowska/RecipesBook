import React from "react";
import CategoryName from "../CategoryName/CategoryName";
import style from './RecipeSingle.module.scss';
import { Link } from "react-router-dom";

const RecipeSingle = ( { name, id, category, ingredients, process, image } ) => {

    let ingredientsSplit = ingredients.split(';');
    let ingredientsList = ingredientsSplit.filter(ingredient => ingredient !== ' ');

    return(
        <div key={id} className={style.recipeContainer}>
            <div className={style.recipeInfo}>
                <img src={image} className={style.recipeImage} alt={name} />
                <div className={style.bgMask}></div>
                <Link to='/' className={style.logoContainer}>
                    <img
                        src="http://serwer142787.lh.pl/images/logo_recipesbook.svg"
                        className={style.logo}
                        alt="Recipes Book" 
                    />
                </Link>
                <h1 className={style.recipeName}>{name}</h1>
                <div className={style.recipeCat}>Kategoria: 
                    <Link to={`/category/${category}`} className={style.recipeCatLink}>
                        <CategoryName categoryId={category} />
                    </Link>
                </div>
            </div>
            <div className={style.recipeContent}>
                <div className={style.recipeIngredients}>
                    <div className={style.recipeIngredientsTitile}>Składniki</div>
                    <ul className={style.recipeIngredientsList}>
                        {ingredientsList.map(ingredient => (
                            <li className={style.recipeIngredientsItem}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className={style.recipeProcess}>
                    <div className={style.recipeProcessTitle}>Wykonanie</div>
                    <div className={style.recipeProcessList}>
                        {process}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecipeSingle;