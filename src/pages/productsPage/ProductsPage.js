import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../../components/UI/productItem/ProductItem";
import classes from "./productsPage.module.css";
import {fetchProductsApi} from "../../common/axios/productApi";


function ProductsPage() {
    const {products} = useSelector(state => state.productsReducer)
    const {error} = useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductsApi())
    }, [dispatch])

    return (
        <div className="cont">
            <div className={classes.products}>
                {
                    preloader
                        ?
                        <h1 className={classes.loading}>Loading......</h1>
                        :
                        error
                            ?
                            <p>{error}</p>
                            :
                            products.map(product => <ProductItem key={product.id} product={product}/>)
                }
            </div>
        </div>

    );
}

export default ProductsPage;