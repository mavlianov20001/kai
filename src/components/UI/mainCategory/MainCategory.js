import React from 'react';
import classes from "./mainCategory.module.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function MainCategory() {

    const {categories} = useSelector(state => state.categoriesReducer)

    const navigate = useNavigate()

    return (
        <div className="cont">
            <div className={classes.main_category}>
                {categories.map((category) => (
                    <li
                        className={classes.list_category}
                        key={category.name}
                        onClick={() => navigate(`/categories/${category.category_slug}`)}
                    >
                        <div className={classes.category_name}>{category.name}</div>
                        <img src={category.image_2} alt={category.name}/>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default MainCategory;