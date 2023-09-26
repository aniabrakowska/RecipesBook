import React from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../components/CategoryPage/CategoryPage";


const Category = () => {
    
    const { catId } = useParams()

    return(
        <>
            <CategoryPage specificId={catId} />
            {/* <p>Kategoria:</p>
            <CategorySingle categoryId={categoryId} />
            <RecipesWrapper category={categoryId} /> */}
        </>
    )
}

export default Category;