import React from 'react';
import CompanyLogoIcon from "../../../../assets/images/icon_profile/Vector (1).svg"
import style from "./Profile.module.css"


function UserProfilePages() {
    return (
            <div className={style.wrapper}>
                <div className={style.wrapper_one}>
                    <div className={style.wrapper__icon}>
                        <img className={style.logo__icon} src={CompanyLogoIcon} alt=""/>
                        <p>Назад</p>
                    </div>
                    <div className={style.wrapper__text}>
                        <h1 className={style}>Профиль</h1>
                        <p className={style}>Мой аккаунт</p>
                        <p className={style}>Мои заказы</p>
                        <p className={style}>История заказов</p>
                    </div>
                </div>
                <div className={style.wrapper_two}>
                    <h3 className={style}>  У вас еще нет аккаунта :(</h3>
                    <div className={style.wrapper__register}>
                        <h4 className={style}>Зарегистрироваться</h4>
                    </div>

                </div>
            </div>

    );
}

export default UserProfilePages;
