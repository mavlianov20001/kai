import React from 'react';
import {useParams} from "react-router-dom";
import Way from "../../components/UI/way/Way";
import {useSelector} from "react-redux";
import ProductItem from "../../components/UI/productItem/ProductItem";
import classes from "./categoriesPage.module.css";

function CategoriesPage() {

    const {products} = useSelector(state => state.productsReducer)

    const {category_slug} = useParams()

    const filterByCategory = products.filter(product => product.categories.category_slug === category_slug)

    const categoryName = filterByCategory[0].categories.name
    let categoryNameOutput = ""
    for (let i=0; i < categoryName.length; i++) {
        let str = categoryName[i]
        categoryNameOutput += (str === "/") ? "," : str
    }

    return (
        <div className="cont">
            <Way way={`Главная / Каталог / ${categoryNameOutput}`}/>
            <div >
                <div className={classes.categories}>
                    {filterByCategory.map(product => <ProductItem key={product.id} product={product}/>)}
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;