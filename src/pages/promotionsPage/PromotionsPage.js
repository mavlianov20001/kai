import React, {useEffect} from 'react';
import classes from "./promotionsPage.module.css";
import Way from "../../components/UI/way/Way";
import {fetchProductsApi} from "../../common/axios/productApi";
import {useDispatch} from "react-redux";
import PromotionsBanner from "../../components/UI/promotionsBanner/PromotionsBanner";
import Sidebar from "../../components/UI/sidebar/Sidebar";
import PromotionsItemPage from "../../components/UI/promotionsItem/PromotionsItemPage";

function PromotionsPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductsApi())
    }, [dispatch])
    return (
        <div className="cont">
            <Way way={"Главная / Акции"}/>
            <div className={classes.promotions}>
                <Sidebar/>
                <div className={classes.info}>
                    <PromotionsBanner/>
                    <PromotionsItemPage/>
                </div>
            </div>
        </div>
    );
}

export default PromotionsPage;