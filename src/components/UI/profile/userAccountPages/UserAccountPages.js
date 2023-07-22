import React from 'react';
import { Form , Row , Col} from "react-bootstrap";
import CompanyLogoIcon from "../../../../assets/images/icon_profile/Vector (1).svg";
import style from "./Account.module.css"
function UserAccountPages(props) {
    return (
            <div className={style.container__2 }>
                <div className={style.wrapper__2}>
                    <div className={style.wrapper_one__2}>
                        <div className={style.wrapper__icon__2}>
                            <img className={style.logo__icon} src={CompanyLogoIcon} alt=""/>
                            <p>Назад</p>
                        </div>
                        <div className={style.wrapper__text__2}>
                            <h1 className={style}>Профиль</h1>
                            <p className={style}>Мой аккаунт</p>
                            <p className={style}>Мои заказы</p>
                            <p className={style}>История заказов</p>
                        </div>
                    </div>

                    <div className={style.wrapper_two_2}>
                        <div className={style.input__text}>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="name">
                                            <Form.Label></Form.Label>
                                            <Form.Control className={style.ln_1} type="text" placeholder="Айназик Абазбекова"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="gmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control className={style.ln_2} type="text" placeholder="abazbekova.ars@gmail.com"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId=" number">
                                            <Form.Label></Form.Label>
                                            <Form.Control className={style.ln_3} type=" text" placeholder="+996 700 000 000"></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>

                        <div className={style.delete_account}>
                            <a href="src/components/UI/profile/userAccountPages/UserAccountPages">
                                <svg width="30" height="30" color={" #00000099"}>
                                    <path d="..."/>
                                </svg>
                                <span className={style.visually_hidden}>Удалить аккаунт</span>
                            </a>


                        </div>
                    </div>
                </div>
            </div>


    )
;
}

export default UserAccountPages;