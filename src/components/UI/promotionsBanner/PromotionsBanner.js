import React from 'react';
import classes from "./PromotionsBanner.module.css";
import promotion from "../../../assets/images/promotions/promotions.svg";
import {Link} from "react-router-dom";
import {links} from "../../../links/links";

function PromotionsBanner() {
    return (
        <div className={classes.banner}>
            <img src={promotion} alt="promotion"/>
            <p className={classes.banner_title}>Скидки каждый день!</p>
            <p className={classes.banner_content}>Зарегистрируйтесь чтобы получить <br/>
                скидку на первую покупку:)</p>
            <div className={classes.banner_link}>
                <Link to={links.signUp}>Зарегистрироваться</Link>
            </div>
        </div>
    );
}

export default PromotionsBanner;