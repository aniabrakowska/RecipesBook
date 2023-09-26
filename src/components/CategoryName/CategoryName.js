import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

const CategoryName = ({categoryId}) => {

    const [cats, setCats ] = useState([]);

    useEffect(
        () => onSnapshot(collection(db,"Kategorie"), (snapshot) => 
        setCats(snapshot.docs.map((doc) => doc.data() )),
        []
        )
    );

    let CategoryName = '';
    cats.forEach((cat) => {
        if (cat.id === categoryId) {
            CategoryName = cat.name;
        }
    })

    return(
        <>{CategoryName}</>
    );
}

export default CategoryName;