import React from 'react';
import style from './aboutThree.module.css'
import zak from '../../../../assets/images/about/aboutThree/zak.png'
import mask from "../../../../assets/images/about/aboutThree/maskk.png";
import {ReactComponent as Elips} from "../../../../assets/images/about/aboutThree/elipses.svg";

const AboutThree = () => {
    return (
        <div>
            <div className="cont">
                <div className={style.block}>
                    <div>
                        <h2>Лидеры по доставке <br/> продуктов</h2>
                        <img src={zak} alt=""/>
                    </div>
                    <Elips className={style.elips}/>
                    <div><img className={style.img} src={mask} alt=""/></div>
                </div>
                <div className={style.blocks}>
                    <div className={style.bl}>
                        <h2>9 из 10</h2>
                        <p>покупателей оценивают доставку на отлично</p>
                    </div>
                    <div className={style.bop}>
                        <h2>1.5 тыс</h2>
                        <p>заказов в день доставляют наши курьеры</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThree;