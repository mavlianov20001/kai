import React from 'react';
import CompanyLogoIcon from "../../../../assets/images/icon_profile/Vector (1).svg"
import Rectangle432 from "../../../../assets/images/icon_profile/str_4/Rectangle 432.svg"
import Rectangle433 from "../../../../assets/images/icon_profile/str_4/Rectangle 433.svg"
import Rectangle434 from "../../../../assets/images/icon_profile/str_4/Rectangle 434.svg"
import Component14 from "../../../../assets/images/icon_profile/Component 14.svg"
import style from "./Orders.module.css"
function MyOrdersPages() {
    return (
        <div className={style.container__5}>
            <div className={style.wrapper__purch}>
                <div className={style.wrapper__purchase__one}>
                    <div className={style.purchase__icon}>
                        <img className={style.purchase__iconBlock} src={CompanyLogoIcon} alt=""/>
                        <div className={style.purchase_text}>
                            <p>Назад</p>
                        </div>
                    </div>
                    <div className={style.purchase__text}>
                        <h1 className={style}>Профиль</h1>
                        <p className={style}>Мой аккаунт</p>
                        <p className={style}>Мои заказы</p>
                        <p className={style}>История заказов</p>
                    </div>
                </div>
                <div className={style.wrapper__purchase__two}>
                    <div className={style.orders_num}>
                        <h5>Заказ %123456</h5>
                    </div>
                    <div className={style.component__15}>
                        <img className={style.component} src={Component14} alt=""/>
                    </div>
                    <div className={style.orders__date}>
                        <p>28 февраля 2023   09:41</p>
                    </div>
                    <div className={style.container__history__block}>

                        <div className={style.milk__block}>
                            <div className={style.milk__icon}>
                                <img  className="one" src={Rectangle432} alt=""/>
                            </div>
                            <div className={style.milk__text}>
                                <div className={style.two}>
                                    <h5 className={style}>Молоко паст. 2.5%</h5>
                                    <p className={style}>930 ml</p>
                                </div>
                            </div>
                            <div className={style.milk__number}>
                                <div className={style.three}>
                                    <h5 className={style}>1x</h5>
                                </div>
                            </div>
                            <div className={ style.milk__som}>
                                <div className={style.four}>
                                    <p className={style}>122 kgz</p>
                                </div>
                            </div>
                        </div>
                        <div className="yogurt__block">
                            <div className="yogurt__icon">
                                <img src={Rectangle433} alt=""/>
                            </div>
                            <div className="yogurt__text">
                                <div className="five">
                                    <h5>Греческий йогурт</h5>
                                    <p>907 ml</p>
                                </div>
                            </div>
                            <div className="yogurt__number">
                                <h5>2x</h5>
                            </div>
                            <div className="yogurt__som">
                                <p>244 kgz</p>
                            </div>
                        </div>

                        <div className="yogurt__block">
                            <div className="yogurt__icon">
                                <img src={Rectangle434} alt=""/>
                            </div>
                            <div className="yogurt__text">
                                <div className="five">
                                    <h5>Сметана "Ключевское"</h5>
                                    <p>400 ml</p>
                                </div>
                            </div>
                            <div className="yogurt_number">
                                <h5>1x</h5>
                            </div>
                            <div className="yogurt_som">
                                <p>135 kgz</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyOrdersPages;
