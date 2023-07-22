import React from 'react';
import CompanyLogoIcon from "../../../../assets/images/icon_profile/Vector (1).svg"
import Rectangle432 from "../../../../assets/images/icon_profile/str_4/Rectangle 432.svg"
import Rectangle433 from "../../../../assets/images/icon_profile/str_4/Rectangle 433.svg"
import Rectangle434 from "../../../../assets/images/icon_profile/str_4/Rectangle 434.svg"
import style from "./History.module.css"
function HistoryProfile() {
    return (
        <div className={style.container__5}>
            <div className={style.wrapper__purch}>
                <div className={style.rapper__purchase__one}>
                        <div className={style.purchase__icon}>
                            <img className={style.purchase__iconBlock} src={CompanyLogoIcon} alt=""/>
                            <div className={style.purchase_text}>
                                <p className={style}>Назад</p>
                            </div>
                        </div>
                    <div className={style.purchase__text}>
                        <h1 className={style}>Профиль</h1>
                        <p className={style}> Мой аккаунт</p>
                        <p className={style}>Мои заказы</p>
                        <p className={style}>История заказов</p>
                    </div>
                </div>
                <div className={style.wrapper__purchase__two}>
                        <div className={style.purchase___text}>
                            <p className={style}>14 февраля 2023</p>
                            <div className={style.status__purchase}>
                                <p className={style}> Статус:</p>
                                <h4 className={style}>Заказ доставлен</h4>
                            </div>
                            <div className={style.status__purchase2}>

                                <p className={style}>Итог: </p>
                                <h5 className={style}>501</h5>
                            </div>
                        </div>
                            <div className={style.container__history__block}>

                                <div className={style.milk__block}>
                                    <div className={style.milk__icon}>
                                        <img className={style.one} src={Rectangle432} alt=""/>
                                    </div>
                                    <div className={style.milk__text}>
                                        <div className={style.two}>
                                            <h5 className={style}> Молоко паст. 2.5%</h5>
                                            <p className={style}>930 ml</p>
                                        </div>
                                    </div>
                                    <div className={style.milk__number}>
                                        <div className={style.three}>
                                            <h5 className={style}>1x</h5>
                                        </div>
                                    </div>
                                    <div className={style.milk__som}>
                                        <div className={style.four}>
                                            <p className={style}>122 kgz</p>
                                        </div>
                                    </div>
                            </div>
                                <div className={style.yogurt__block}>
                                    <div className={style.yogurt__icon}>
                                        <img src={Rectangle433} alt=""/>
                                    </div>
                                    <div className={style.yogurt__text}>
                                        <div className={style.five}>
                                            <h5 className={style}>Греческий йогурт</h5>
                                            <p className={style}>907 ml</p>
                                        </div>
                                    </div>
                                    <div className={style.yogurt__number}>
                                        <h5 className={style}>2x</h5>
                                    </div>
                                    <div className={style.yogurt__som}>
                                        <p className={style}>244 kgz</p>
                                    </div>
                                </div>

                                <div className={style.yogurt__block}>
                                    <div className={style.yogurt__icon}>
                                        <img src={Rectangle434} alt=""/>
                                    </div>
                                    <div className={style.yogurt__text}>
                                        <div className={style.five}>
                                            <h5 className={style}>Сметана "Ключевское"</h5>
                                            <p className={style}>400 ml</p>
                                        </div>
                                    </div>
                                    <div className={style.yogurt_number}>
                                        <h5>1x</h5>
                                    </div>
                                    <div className={style.yogurt_som}>
                                        <p className={style}>135 kgz</p>
                                    </div>
                                </div>

                        </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryProfile;
