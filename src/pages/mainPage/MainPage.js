import React, {useEffect} from 'react';
import NewProducts from "../../components/UI/newProducts/NewProducts";
import PromotionsItem from "../../components/UI/promotionsItem/PromotionsItem";
import OurPartners from "../../components/Base/ourPartners/OurPartners";
import {fetchProductsApi} from "../../common/axios/productApi";
import {fetchCategoriesApi} from "../../common/axios/categoryApi";
import {useDispatch} from "react-redux";
import classes from "./mainPage.module.css";
import MainCategory from "../../components/UI/mainCategory/MainCategory";
import FirstMineBlock from "../../components/Base/firstMineBlock/FirstMineBlock";
// import Modal from "../../components/modal/Modal";
// import ProductPageTwo from "../productPage/ProductPageTwo";
// import CatalogPage from "../catalogPage/CatalogPage";

function MainPage() {
    // const [modalActive, setModalActive] = useState(true)
    // const [product_slug, setProduct_slug] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        // fetchCategoriesApi().then(data => dispatch(getCategories(data.results)))
        dispatch(fetchCategoriesApi())
        dispatch(fetchProductsApi())
    }, [dispatch])


    return (
        <div className="cont">
            <div>
                <FirstMineBlock/>
            </div>
            <div>
                <div className={classes.title}>Новинки</div>
                <NewProducts/>
            </div>
            <div>
                <div className={classes.title}>Категории</div>
                <MainCategory/>
            </div>
            <div>
                <div className={classes.title}>Акции</div>
                <PromotionsItem/>
            </div>
            <OurPartners/>
            {/*<button className={classes.open_btn} onClick={() => setModalActive(true)}>Модальное окно</button>*/}
            {/*<Modal active={modalActive} setActive={setModalActive}>*/}
            {/*    <ProductPageTwo product_slug={product_slug}/>*/}
            {/*</Modal>*/}
        </div>
    );
}

export default MainPage;