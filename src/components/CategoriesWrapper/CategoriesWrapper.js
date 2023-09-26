import React, { useEffect, useState } from "react";
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

import '@splidejs/react-splide/css';
import style from './CategoriesWrapper.module.scss';
import styleItem from './CategoriesItem/CategoriesItem.module.scss';

const CategoriesWrapper = ( { withRecipes, splideDisplay } ) => {

    const [cats, setCats ] = useState([]);

    useEffect(
        () => onSnapshot(collection(db,"Kategorie"), (snapshot) => 
        setCats(snapshot.docs.map((doc) => doc.data() )),
        []
        )
    );

    const renderCategoryItems = (cats, withRecipes, splideDisplay) => {
        return cats.map(cat => (
            <CategoriesItem key={cat.id} {...cat} withRecipes={withRecipes} splideDisplay />
        ));
    };

    let optionsSplide = { 
        perPage: 1, 
        updateOnMove: true,
        type: 'loop',
        // focus  : 'center',
        slideFocus: true,
        start  : 4,
        pagination: false,
        padding: {left: '30%', right: '30%'},
        mediaQuery: 'min',
        breakpoints: {
            768: {
                // arrows: true,
                focus  : 0,
                padding: { left: '0%', right: '20%' },
                omitEnd: true,
                perPage: 3,
            }
        }
    };

    return(
        <>

            <h2 className={style.categoryTitle}>Kategorie</h2>
        
            { splideDisplay ? (
                <Splide 
                aria-label="My Favorite Images"
                options={optionsSplide} >
                    {renderCategoryItems(cats, withRecipes, splideDisplay)}
                    <SplideSlide key={`category_all`} className={styleItem.slideItem}>
                        <Link to={`/category`}  className={styleItem.slideContainer}>
                            <img src='http://serwer142787.lh.pl/images/default.jpg' alt='all recipes'  className={styleItem.image} />
                            <p className={styleItem.name}>Wszystkie</p>
                        </Link>
                    </SplideSlide>
                </Splide>
            ) : (
                renderCategoryItems(cats, withRecipes)
            )}
            
        </>
    )
};

export default CategoriesWrapper;