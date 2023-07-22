import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "../productItem/ProductItem";
import classes from "./promotionsItem.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PromotionsItem() {
    const {products} = useSelector(state => state.productsReducer)

    const discountProducts = products.filter(product => product.discount_price > 0)

    return (
        <div className={classes.discount_product}>
            <Swiper
                spaceBetween={0}
                className='mySwiper'
                slidesPerView={4}
            >
                {discountProducts.map(product =>
                    <SwiperSlide key={product.id}>
                        <ProductItem key={product.id}
                                     product={product}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default PromotionsItem;