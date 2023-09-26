import React from "react";
import { Link } from "react-router-dom";

const RecipesItem = ({ name, id, image, category }) => (
    <li key={id}>
        <Link to={`/${id}`}>
            <img src={image} alt={name} style={{width:80, height: 100 }} />
            <p>{name}</p>
        </Link>
    </li>
);

export default RecipesItem;