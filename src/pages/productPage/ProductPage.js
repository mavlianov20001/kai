import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import classes from './productPage.module.css'
import {fetchOneProductApi} from "../../common/axios/productApi";
import Way from "../../components/UI/way/Way";

function ProductPage() {
    const dispatch = useDispatch()
    const {product_slug} = useParams()

    const {product} = useSelector(state => state.productsReducer)
    const {error} = useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)

    useEffect(() => {
        dispatch(fetchOneProductApi(product_slug))
    }, [dispatch, product_slug])
    return (
        <div className="cont">
            <Way way={`Главная / Каталог / ${product.name}`}/>
            <div className={classes.product}>
                {
                    preloader
                        ?
                        <h1 className={classes.loading}>Loading......</h1>
                        :
                        error
                            ?
                            <p>{error}</p>
                            :
                            <>
                                <div className={classes.product_image}>
                                    <div className={classes.image}>
                                        <img src={product.image} alt={product.product_slug}></img>
                                    </div>
                                    <div className={`${classes.icon_favorites}`}></div>
                                    <button>В корзину</button>
                                </div>
                                <div className={classes.product_info}>
                                    <p className={classes.name}>{product.name}</p>
                                    <p className={classes.weight_volume}>{product.weight_volume} г</p>
                                    <div className={classes.product_price}>
                                        {product.discount_price ?
                                            <div className={classes.product_info_Discount}>
                                                <span className={classes.discount}>{product.discount_price}KGS</span>
                                                <span> / </span>
                                                <span className={classes.price}>{product.price}</span>
                                            </div>
                                            :
                                            <span className={classes.price}>{product.price}KGS</span>
                                        }
                                    </div>
                                    <div className={classes.description}>
                                        <p className={classes.header}>Описание</p>
                                        <p className={classes.info}>{product.description}</p>
                                    </div>
                                    <div className={classes.valid}>
                                        <p className={classes.header}>Годен</p>
                                        <p className={classes.info}>До {product.valid_time} суток. </p>
                                    </div>
                                    <div className={classes.weight_volume}>
                                        <p className={classes.header}>Вес/Объем</p>
                                        <p className={classes.info}>{product.weight_volume} г</p>
                                    </div>
                                    <div className={classes.code}>
                                        <p className={classes.header}>Код товара</p>
                                        <p className={classes.info}>{product.product_code}</p>
                                    </div>
                                </div>
                            </>
                }
            </div>
        </div>
    );
}

export default ProductPage;