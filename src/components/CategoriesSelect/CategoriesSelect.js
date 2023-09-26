import React from "react";
import style from './CategoriesSelect.module.scss';
import { Link } from "react-router-dom";

const CategoriesSelect = ({changeCat, cats, specificCat}) =>{

    return(
        <>
            <Link to='/' className={style.logoContainer}>
                <img
                    src="http://serwer142787.lh.pl/images/logo_recipesbook.svg"
                    className={style.logo}
                    alt="Recipes Book" 
                />
            </Link>
            <div className={style.categoriesSelectContainer}>
                <select value={specificCat} onChange={changeCat} className={style.categoriesSelect}>
                    <option value="" className={style.categoriesOption}>Wszystkie</option>
                    {cats.map(cat => (
                        <option 
                            key={`cat${cat.id}`} 
                            value={cat.id}
                            className={style.categoriesOption}
                            >
                                {cat.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )

};

export default CategoriesSelect;