import React from "react";
import RecipesWrapper from "../../RecipesWrapper/RecipesWrapper";
import { Link } from "react-router-dom";
import style from './CategoriesItem.module.scss';
import { SplideSlide } from "@splidejs/react-splide";


const CategoriesItem = ({name, id, image, withRecipes, splideDisplay}) => {

    let recipes = withRecipes ? <RecipesWrapper category={id} /> : '' ;

    return(
        <>
            { splideDisplay ? 
            <>
                <SplideSlide key={`category_${id}`} className={style.slideItem} >
                    <Link to={`/category/${id}`} className={style.slideContainer} >
                        <img src={image} alt={name} className={style.image} />
                        <p className={style.name}>{name}</p>
                    </Link>
                    <div>{recipes}</div>
                </SplideSlide>
            </> : 
            <>
                <li key={`category_${id}`} className={style.li} >
                    <Link to={`/category/${id}`} >
                        <img src={image} alt={name} className={style.image} />
                        <p>{name}</p>
                    </Link>
                    <div>{recipes}</div>
                </li>
            </> }
            
        </>
    );

};

export default CategoriesItem;