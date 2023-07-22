import React, {useEffect} from 'react';
import classes from "./sidebar.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchProductsApi} from "../../../common/axios/productApi";

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {categories} = useSelector(state => state.categoriesReducer)

    useEffect(() => {
        dispatch(fetchProductsApi())
    }, [dispatch])

    return (
        <div className={classes.sidebar}>
            <div className={classes.Category}>
                {categories.map((category) => (
                    <li key={category.name}>
                        <div className={classes.sidebar_title} onClick={() => navigate(`/categories/${category.category_slug}`)}>
                            <img src={category.image} alt={category.category_slug}/>
                            <div className={classes.title}>{category.name}</div>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;