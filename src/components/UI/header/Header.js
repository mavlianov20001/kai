import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDebounce} from "../../../hook/debounce";
import {$host} from "../../../common/axios";
import {setIsAuth} from "../../../redux/slices/usersSlice";
import classes from "./header.module.css";
import {links} from "../../../links/links";
import logo from "../../../assets/images/logo.svg";
import search from "../../../assets/images/icons/icon_search.svg";
import clear from "../../../assets/images/icons/icon_x.svg";
import i_like from "../../../assets/images/icons/icon_like.svg";
import i_cart from "../../../assets/images/icons/icon_cart.svg";
import {Dropdown} from "react-bootstrap";
import i_profile from "../../../assets/images/icons/icon_profile.svg";
import i_catalog from "../../../assets/images/icons/icon_catalog.svg";
import Modal from "../modal/Modal";
import ContactsPage from "../../../pages/contactsPage/ContactsPage";

function Header() {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')

    const navigate = useNavigate()

    const [dropdown, setDropdown] = useState(false)

    const [clearSearch, setClearSearch] = useState(false)

    const [products, setProducts] = useState([])

    const debounced = useDebounce(inputValue, 500);

    const [modalActive, setModalActive] = useState(false)

    async function searchProducts() {
        const response = await $host.get('products/', {params: {search: debounced}})
        setProducts(response.data.results)
    }

    useEffect(() => {
        if (debounced.length >= 2) {
            searchProducts().then(() => {
                setDropdown(true)
                setClearSearch(true)
            })
        } else {
            setDropdown(false)
            setClearSearch(false)
        }
    }, [debounced])


    const {isAuth} = useSelector(state => state.userReducer)
    const logOut = () => {
        dispatch(setIsAuth(false))
    }

    const setActive = ({isActive}) => isActive ? `${classes.active_link}` : ''

    return (
        <div className={classes.main}>
            <div className="cont">
                <div className={classes.nav}>
                    <div className={classes.logo}>
                        <Link to={links.base}><img src={logo} alt='logo'/></Link>
                    </div>
                    <div className={classes.search_block}>
                        <img src={search} alt='search'/>
                        <input
                            className={classes.search_input}
                            type={search}
                            placeholder="Найти продукт"
                            value={inputValue}
                            onChange={event => setInputValue(event.target.value)}
                        />
                        {clearSearch &&
                            <img className={classes.search_clear} src={clear} alt='clear'
                                 onClick={() => {
                                     setDropdown(false)
                                     setInputValue('')
                                 }}
                            />
                        }
                        {dropdown &&
                            <ul className={classes.search_dropdown}>
                                {
                                    products.map(product => (
                                        <li
                                            key={product.id}
                                            onClick={() => {
                                                navigate(`/products/${product.product_slug}`)
                                                setDropdown(false)
                                                setInputValue('')
                                            }}
                                        >
                                            {product.name}
                                        </li>
                                    ))
                                }
                            </ul>}
                    </div>
                    <div className={classes.navbar_icon}>
                        <Link className={classes.navbar_item} to={links.favorites}>
                            <img src={i_like} alt='i_like'/></Link>
                        <Link className={classes.navbar_item} to={links.basket}>
                            <img src={i_cart} alt='i_cart'/></Link>
                        <Dropdown className={classes.navbar_item}>
                            <Dropdown.Toggle className={classes.dropDownToggle}
                                             style={{background: `url(${i_profile}) no-repeat center center`}}/>
                            <Dropdown.Menu align='end'>
                                {isAuth ?
                                    <div className={classes.dropDownAuth}>
                                        <Link to={links.profile}
                                        >
                                            Личный кабинет
                                        </Link>
                                        <Link to={links.myOrders}
                                        >
                                            Мои заказы
                                        </Link>
                                        <Link to={links.base}
                                              onClick={logOut}
                                        >
                                            Выйти
                                        </Link>
                                    </div>
                                    :

                                    <Link to={links.signIn}
                                          className={classes.dropDownAuth}
                                    >
                                        Авторизация
                                    </Link>
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className={classes.menu}>
                    <Link to={links.catalog}
                          className={classes.catalog}
                    >
                        <img src={i_catalog} alt='i_catalog'/>
                        <span>Каталог</span>
                    </Link>
                    <ol>
                        <li>
                            <NavLink to={links.promotions}
                                     className={setActive}
                            >
                                Акции %
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={links.delivery}
                                     className={setActive}
                            >
                                Доставка
                            </NavLink></li>
                        <li>
                            <button
                                onClick={() => setModalActive(true)}
                            >
                                Контакты
                            </button>
                        </li>
                        <li>
                            <Dropdown className={classes.navbar_item}>
                                <Dropdown.Toggle variant="link"
                                                 className={classes.dropDownToggle}>Прочее</Dropdown.Toggle>
                                <Dropdown.Menu
                                    align='end'
                                >
                                    <div className={classes.dropDownOther}>
                                        <NavLink to={links.aboutUs}
                                                 className={setActive}
                                        >
                                            О нас
                                        </NavLink>
                                        <NavLink to={links.jobVacancies} className={setActive}
                                        >
                                            Ваканcии
                                        </NavLink>
                                        <NavLink to={links.faqs} className={setActive}
                                        >
                                            Помощь
                                        </NavLink>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ol>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <ContactsPage/>
            </Modal>
        </div>
    );
}

export default Header;