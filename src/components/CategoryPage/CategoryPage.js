import React from "react";

import '@splidejs/react-splide/css';
import CategoriesSelect from "../CategoriesSelect/CategoriesSelect";
import RecipesList from "../RecipesList/RecipesList";

import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

import style from './CategoryPage.module.scss';


class CategoryPage extends React.Component {

    state = {
        cats: [],
        recipes: [],
        currentCategory: '',
        specificId: this.props.specificId
    }

    componentDidMount() {
        this.unsubscribeCats = onSnapshot(collection(db, "Kategorie"), (snapshot) => {
          const cats = snapshot.docs.map((doc) => doc.data());
          this.setState({ cats: [...cats] });
        });
    
        this.unsubscribeRecipes = onSnapshot(collection(db, "Przepisy"), (snapshot) => {
          const recipes = snapshot.docs.map((doc) => doc.data());
          this.setState({ recipes: [...recipes] });
        });
    }
    

    componentWillUnmount() {
        if (this.unsubscribeCats) {
            this.unsubscribeCats();
        }
        if (this.unsubscribeRecipes) {
            this.unsubscribeRecipes();
        }
    }

    changeCategory = (e) => {

        const selectedCategory = e.target.value;

        this.setState({ currentCategory: selectedCategory })
        
        if (selectedCategory === '') {
            this.setState({ specificId: undefined });
        } else {
            this.setState({ specificId: selectedCategory  });
        }
        
        window.history.pushState(null, null, `/category/${selectedCategory}`);

    }

    render(){
        const { cats, recipes, currentCategory, specificId } = this.state;
        let displayedCategory = currentCategory || specificId;

        return (
            <div className={style.categoryContainer}>
                <CategoriesSelect changeCat={this.changeCategory} cats={cats} specificCat={displayedCategory} />
                <RecipesList categoryId={displayedCategory} recipes={recipes} />
            </div>
        )
    }

  }

  export default CategoryPage;