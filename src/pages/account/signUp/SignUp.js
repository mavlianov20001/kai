import React, {useState} from 'react';
import classes from "./signUp.module.css";
import {links} from "../../../links/links";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import logo from '../../../assets/images/logo.svg'
// import i_google from '../../../assets/images/icons/icon_google.svg'
import i_user from "../../../assets/images/icons/icon_user.svg";
import i_eyeslash from "../../../assets/images/icons/icon_eyeslash.svg";
import i_lock from "../../../assets/images/icons/icon_lock.svg";
import i_sms from "../../../assets/images/icons/icon_sms.svg";
import {register} from "../../../common/axios/userApi";
import i_phone from "../../../assets/images/icons/icon_phone.png";

const innRegExp = /^\d{9}$/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,30}$/


function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [isType, setIsType] = useState(true)
    const [isTypeTwo, setIsTypeTwo] = useState(true)
    const onClick = () => setIsType(!isType);
    const onClickTwo = () => setIsTypeTwo(!isTypeTwo);
    const CheckPassword = (password === passwordTwo)

    const submitHandler = (event) => {
        event.preventDefault()
        if (!innRegExp.test(number)) {
            return alert("+996 (введите 9 цифр)")
        }
        if (!CheckPassword) {
            return alert("пароли не совпадают")
        }
        if (!passwordRegExp.test(password)) {
            return alert("(Ваш пароль не может быть слишком похож на другую вашу личную информацию. " +
                "Ваш пароль должен содержать не менее 7 символов, хотя бы 1 заглавную букву, A-Z, " +
                "одну цифру и содержать только латинские буквы)")
        }
        dispatch(register({username, email, password, number})).then(()=> navigate(links.successfulSignUp))
    }

    return (
        <div className={classes.reg}>
            <form
                className={classes.card}
                onSubmit={submitHandler}
            >
                <p>Добро пожаловать в <img src={logo} alt='logo'/></p>
                <p className={classes.text}>Для регистрации заполните поля</p>
                <div className={classes.inputBox}>
                    <img className={classes.img_icon} src={i_user} alt='i_user'/>
                    <input type="text"
                           placeholder='Имя пользователя'
                           value={username}
                           onChange={e => setUsername(e.target.value)}
                           required
                    />
                </div>
                <div className={classes.inputBox}>
                    <img className={classes.img_icon} src={i_sms} alt='i_sms'/>
                    <input type="email"
                           placeholder='email'
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           required
                    />
                </div>
                <div className={classes.inputBox}>
                    <img className={classes.img_icon} src={i_phone} alt='i_phone'/>
                    <input type="number"
                           placeholder='Номер телефона '
                           value={number}
                           onChange={e => setNumber(e.target.value)}
                           required
                    />
                </div>
                <div className={classes.inputBox}>
                    <img className={classes.img_icon} src={i_lock} alt='i_lock'/>
                    <input placeholder='Пароль'
                           value={password}
                           type={isType ? "password" : "text"}
                           onChange={e => setPassword(e.target.value)}
                           required
                    />
                    <img onClick={onClick} className={classes.eyeslashinput} src={i_eyeslash} alt='i_eyeslash'/>
                </div>
                <div className={classes.inputBox}>
                    <img className={classes.img_icon} src={i_lock} alt='i_lock'/>
                    <input placeholder='Повторите пароль'
                           value={passwordTwo}
                           type={isTypeTwo ? "password" : "text"}
                           onChange={e => setPasswordTwo(e.target.value)}
                           required
                    />
                    <img onClick={onClickTwo} className={classes.eyeslashinput} src={i_eyeslash} alt='i_eyeslash'/>
                </div>
                <div className={classes.signup}>
                    <button
                        type="submit"
                    >
                        Зерегистрироваться
                    </button>
                    <div className={classes.footer}>
                        <p>
                            <span>У вас уже есть аккаунт?</span> <Link to={links.signIn}> Логин!</Link>
                        </p>
                        {/*<p>*/}
                        {/*    Зерегистрироваться через <img src={i_google} alt='i_google'/>*/}
                        {/*</p>*/}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;