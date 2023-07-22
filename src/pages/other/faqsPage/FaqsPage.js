import React, {useEffect} from 'react';
import Way from "../../../components/UI/way/Way";
import classes from "./faqsPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchFaqsApi} from "../../../common/axios/faqsApi";
import {getFaqs} from "../../../redux/slices/faqsSlice";
import FaqItem from "../../../components/UI/faqItem/FaqItem";

function FaqsPage() {
    const {faqs} = useSelector(state => state.faqsReducer)
    const {error} = useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchFaqsApi().then(data => dispatch(getFaqs(data.results)))
    }, [dispatch])

    return (
        <div className="cont">
            <Way way={"Главная / Помощь"}/>
            <div className={classes.help}>
                <div className={classes.title}>
                    Часто задавамые вопросы
                </div>
                <div className={classes.faqs}>
                    {
                        preloader
                            ?
                            <h1 className={classes.loading}>Loading......</h1>
                            :
                            error
                                ?
                                <p>{error}</p>
                                :
                                faqs.map(faq => <FaqItem key = {faq.id} faq={faq}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default FaqsPage;