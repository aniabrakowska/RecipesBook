import React from "react";
import CategoriesWrapper from "../../components/CategoriesWrapper/CategoriesWrapper";

import style from './root.module.scss';





const Root = () => {

    return (
        <div className={style.container}>
            <div className={style.bgMask}></div>
            <div className={style.containerHeader}>
                <img 
                    src="https://recipesbook.aniabrakowska.wroclaw.pl/logo_recipesbook.svg"
                    className={style.logo}
                    alt="Recipes Book" 
                />
            </div>
            <div className={style.containerContent}>
                <CategoriesWrapper splideDisplay />
            </div>
        </div>
    );

  }

  export default Root;