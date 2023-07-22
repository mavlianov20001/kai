import React from 'react';
import classes from "./faqItem.module.css";
import arrow from "../../../assets/images/icons/icon_arrow.svg"
import {useNavigate} from "react-router-dom";

function FaqItem({faq}) {

    const navigate = useNavigate()

    const clickHandler = () => navigate(`/faqs/${faq.faq_slug}`)


    return (
        <div onClick={clickHandler}  className={classes.faq}>
            <p className={classes.faq_title}>{faq.title}</p>
            <img src={arrow} alt="arrow"/>
        </div>
    );
}

export default FaqItem;