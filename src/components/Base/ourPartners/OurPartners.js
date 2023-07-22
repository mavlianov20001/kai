import React from 'react';
import style from './ourPartners.module.css'
import {ReactComponent as Frunze} from "../../../assets/images/ourPartners/frunze.svg";
import globus from "../../../assets/images/ourPartners/globus.svg";
import glovo from "../../../assets/images/ourPartners/glovo.svg";

const OurPartners = () => {
    return (
        <div className={style.box}>
            <h2>Наши партнеры</h2>
            <div className={style.blocks}>
                <Frunze/>
                <img className={style.glovo} src={glovo} alt=""/>
                <img src={globus} alt=""/>
            </div>
        </div>
    );
};

export default OurPartners;