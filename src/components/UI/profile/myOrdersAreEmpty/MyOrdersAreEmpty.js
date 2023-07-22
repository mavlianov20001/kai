import React from 'react';
import CompanyLogoIcon from "../../../../assets/images/icon_profile/Vector (1).svg"
import style from "./Empty.module.css"
function MyOrdersAreEmpty(props) {
    return (
        <div className={style.wrapper__orders}>
            <div className={style.wrapperOrders__one}>
                    <div className={style.length}>
                        <div className={style.orders_text}>
                            <img className={style.logo__icon} src={CompanyLogoIcon} alt=""/>
                            <p className={style}> Назад</p>
                        </div>
                        <div className={style.order__text}>
                            <h1 className={style}>Профиль</h1>
                            <p className={style}>Мой аккаунт</p>
                            <p className={style}>Мои заказы</p>
                            <p className={style}>История заказов</p>
                        </div>
                    </div>
            </div>
            <div className={style.wrapperOrders__two}>
                <p className={style}>У вас пока нет ни одного заказа :(</p>
                <div className={style.wrapper__catalog}>
                    <h4 className={style}>Перейти к каталогу</h4>
                </div>
            </div>
        </div>
    );
}

export default MyOrdersAreEmpty;
