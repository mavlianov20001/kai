import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "../productItem/ProductItem";
import classes from "./newProducts.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function NewProducts() {
    const {products} = useSelector(state => state.productsReducer)

    const newProducts = products.filter(product => product.is_new === true)

    return (
        <div className={classes.new_product}>
            <Swiper
                spaceBetween={0}
                className='mySwiper'
                slidesPerView={4}
            >
                {newProducts.map(product =>
                    <SwiperSlide key={product.id}> <ProductItem key={product.id} product={product}/></SwiperSlide>
                )}

            </Swiper>
        </div>
    );
}

export default NewProducts;