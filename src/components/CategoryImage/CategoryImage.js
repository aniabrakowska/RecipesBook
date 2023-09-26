import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

const CategoryImage = ({categoryId}) => {

    const [cats, setCats ] = useState([]);

    useEffect(
        () => onSnapshot(collection(db,"Kategorie"), (snapshot) => 
        setCats(snapshot.docs.map((doc) => doc.data() )),
        []
        )
    );

    let CategoryImage = '';
    let CategoryAlt = '';
    cats.forEach((cat) => {
        if (cat.id === categoryId) {
            CategoryImage = cat.image;
            CategoryAlt = cat.name;
        }
    })
    if( CategoryImage === '' ){
        CategoryImage = 'http://serwer142787.lh.pl/images/default.jpg';
        CategoryAlt = 'Wszystkie przepisy';
    }

    return(
        <img src={CategoryImage} alt={CategoryAlt} />
    );
}

export default CategoryImage;