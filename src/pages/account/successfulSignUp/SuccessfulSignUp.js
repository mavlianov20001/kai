import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {links} from "../../../links/links";
import classes from "./successfulSignUp.module.css";
import logo from "../../../assets/images/logo.svg";
import successfulSignUp from "../../../assets/images/successful_sign_up.svg";

function SuccessfulSignUp() {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.userReducer)
    const click = () => {
        navigate(links.base)
    }

    return (
        <div className='cont'>
            <div className={classes.successful}>
                <div className={classes.card}>
                    <p>Добро пожаловать в <img src={logo} alt='logo'/></p>
                    <div className={classes.check}>
                        <img src={successfulSignUp} alt='successfulSignUp'/>
                        <p>Поздравляем!</p>
                        <div className={classes.info}>
                            <p>Вы успешно зарегистрировались!:)</p>
                            <p><span>{user}</span> на вашу почту отправлено письмо для активации аккаунта! </p>

                            {/*<div className={classes.check_box}>*/}
                            {/*    <input type="checkbox" name="remember_me" id="remember_me"/>*/}
                            {/*    <label htmlFor="remember_me">Запомнить меня</label>*/}
                            {/*</div>*/}
                            <button onClick={click}>Начать покупку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default SuccessfulSignUp;