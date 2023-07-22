import React from 'react';
import CompanyLogoIcon from "../../../../assets/images/icon_profile/Vector (1).svg";
import style from "./Purchase.module.css"
function PurchaseHistoryIsEmpty(props) {
    return (
        <div className={style.wrapper__history} >
            <div className={style.wrapper__history__one}>
                <div className={style.length}>
                    <div className={style.history_text}>
                        <img className={style.logo__icon} src={CompanyLogoIcon} alt=""/>
                        <p> Назад</p>
                    </div>
                    <div className={style.history__text}>
                        <h1 className={style}>Профиль</h1>
                        <p className={style}> Мой аккаунт</p>
                        <p className={style}>Мои заказы</p>
                        <p className={style}>История заказов</p>
                    </div>
                </div>
            </div>
            <div className={style.wrapper__history__two}>
                <p className={style}>Ваша история покупок пуста :(</p>
                <div className={style.wrapper__catalog__history}>
                    <h4 className={style}>Перейти к каталогу </h4>
                </div>
            </div>
        </div>

    );
}

export default PurchaseHistoryIsEmpty;