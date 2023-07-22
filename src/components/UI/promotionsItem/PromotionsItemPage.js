import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "../productItem/ProductItem";
import classes from "./promotionsItem.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PromotionsItemPage() {
    const {products} = useSelector(state => state.productsReducer)

    const discountProducts = products.filter(product => product.discount_price > 0)

    return (
        <div className={classes.discount_product}>
            {discountProducts.map(product =>
                <ProductItem key={product.id}
                             product={product}/>
            )}
        </div>
    );
}

export default PromotionsItemPage;