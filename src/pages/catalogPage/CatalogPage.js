import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./catalogPage.module.css";
import ProductItem from "../../components/UI/productItem/ProductItem";
import Way from "../../components/UI/way/Way";
import PromotionsBanner from "../../components/UI/promotionsBanner/PromotionsBanner";
import Sidebar from "../../components/UI/sidebar/Sidebar";
import Pagination from "../../components/UI/pagination/Pagination";
import {fetchProductsApi} from "../../common/axios/productApi";

function CatalogPage() {
    const {products} = useSelector(state => state.productsReducer)
    const {error} = useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsApi())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(20)

    const lastProductIndex = currentPage * productsPerPage
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProduct = products.slice(firstProductIndex, lastProductIndex)
    const totalProducts=products.length

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="cont">
            <Way way={"Главная / Каталог "}/>
            <div className={classes.catalog}>
                <Sidebar/>
                <div className={classes.info}>
                    <PromotionsBanner/>
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
                                    currentProduct.map(product => <ProductItem key={product.id} product={product}/>)
                        }
                    </div>
                    <div className={classes.pagination}>
                        <Pagination
                            itemsPerPage={productsPerPage}
                            totalItems={totalProducts}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogPage;
