import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './productPage.module.css'
import {fetchOneProductApi} from "../../common/axios/productApi";
import {getProduct} from "../../redux/slices/productsSlice";

function ProductPageTwo({product_slug}) {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.productsReducer)
    const {error} = useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)

    useEffect(() => {
        fetchOneProductApi(product_slug).then(data => dispatch(getProduct(data)))
    }, [dispatch, product_slug])
    return (
        <div className="cont">
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
                                    <p className={classes.weight_volume}>330 г</p>
                                    <div className={classes.product_price}>
                                        {product.discount ?
                                            <div className={classes.product_info_Discount}>
                                                <span className={classes.discount}>{product.discount} KGS</span>
                                                <span> / </span>
                                                <span className={classes.price}>{product.price}</span>
                                            </div>
                                            :
                                            <span className={classes.price}>{product.price} KGS</span>
                                        }
                                    </div>
                                    <div className={classes.description}>
                                        <p className={classes.header}>Описание</p>
                                        <p className={classes.info}>{product.description}</p>
                                    </div>
                                    <div className={classes.valid}>
                                        <p className={classes.header}>Годен</p>
                                        <p className={classes.info}>До 12 суток. </p>
                                    </div>
                                    <div className={classes.weight_volume}>
                                        <p className={classes.header}>Вес/Объем</p>
                                        <p className={classes.info}>330 г</p>
                                    </div>
                                    <div className={classes.energy_value}>
                                        <p className={classes.header}>Пищевая и энергетическая ценность в 100 г.</p>
                                        <p className={classes.info}>белки 14 г, жиры 17 г, ; 209 ккал</p>
                                    </div>
                                    <div className={classes.compound}>
                                        <p className={classes.header}>Состав</p>
                                        <p className={classes.info}>говядина</p>
                                    </div>
                                    <div className={classes.code}>
                                        <p className={classes.header}>Код товара</p>
                                        <p className={classes.info}>10050449123</p>
                                    </div>
                                </div>
                            </>
                }
            </div>
        </div>
    );
}

export default ProductPageTwo;