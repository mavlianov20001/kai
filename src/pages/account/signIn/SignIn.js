import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {links} from "../../../links/links";
import {Link, useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
import {getUser, setIsAuth} from "../../../redux/slices/usersSlice";
import logo from "../../../assets/images/logo.svg";
import classes from "./signIn.module.css";
// import i_google from "../../../assets/images/icons/icon_google.svg";
import i_sms from "../../../assets/images/icons/icon_sms.svg";
import i_lock from "../../../assets/images/icons/icon_lock.svg";
import i_eyeslash from "../../../assets/images/icons/icon_eyeslash.svg";
import {signIn} from "../../../common/axios/userApi";

function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isType, setIsType] = useState(true)
    const onClick = () => setIsType(!isType);

    const click = async () => {
        try {
            const data = await signIn(email, password)
            console.log(data)
            dispatch(getUser(data.user_id))
            dispatch(setIsAuth(true))
            navigate(links.base)
        } catch (e) {
            console.log(e)
            alert(e.message)
        }
    }

    return (
        <div className='cont'>
            <div className={classes.auth}>
                <div className={classes.card}>
                    <p>Добро пожаловать в <img src={logo} alt='logo'/></p>
                    <Form>
                        <div className={classes.input}>
                            <img className={classes.img_icon} src={i_sms} alt='i_sms'/>
                            <Form.Control
                                className={classes.form}
                                placeholder='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={classes.input}>
                            <img className={classes.img_icon} src={i_lock} alt='i_lock'/>
                            <Form.Control
                                className={classes.form_pass}
                                placeholder='Пароль'
                                value={password}
                                type={isType ? "password" : "text"}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <img onClick={onClick} className={classes.eyeslashinput} src={i_eyeslash} alt='i_eyeslash'/>
                        </div>
                    </Form>
                    <div className={classes.signin}>
                        <button
                            onClick={click}
                        >
                            Авторизоваться
                        </button>
                        <div className={classes.footer}>
                            <Link to={'/'}>Забыли пароль?</Link>
                            <p>
                                У вас нет аккаунтa? <Link to={links.signUp}>Зерегистрироваться</Link>
                            </p>
                            {/*<p>*/}
                            {/*    Войти через <img src={i_google} alt='i_google'/>*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;