import React from 'react';
import {useNavigate} from "react-router-dom";
import classes from "./productItem.module.css";

function ProductItem({product}) {

    const navigate = useNavigate()

    const clickHandler = () => navigate(`/products/${product.product_slug}`)

    let sliceName = product.name.slice(0,16);
    if (sliceName.length < product.name.length) {
        sliceName += '...';
    }

    return (
        <div className={classes.product}>
            <div onClick={clickHandler} className={classes.product_image}>
                <img src={product.image} alt={product.product_slug}></img>
            </div>
            <div className={`${classes.icon_favorites}`}></div>
            {
                product.discount_price ?
                    <div className={classes.product_info_Discount}>
                        <p className={classes.discount}>{product.discount_price} KGS</p>
                        <p className={classes.price}>{product.price}</p>
                        <p className={classes.name}>{sliceName}</p>
                        <p className={classes.weight}>{product.weight_volume} г</p>
                    </div>
                    :
                    <div className={classes.product_info}>
                        <p className={classes.price}>{product.price} KGS</p>
                        <p className={classes.name}>{sliceName}</p>
                        <p className={classes.weight}>{product.weight_volume} г</p>
                    </div>
            }
            <button>В корзину</button>
        </div>
    );
}

export default ProductItem;