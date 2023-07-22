import React, {useEffect} from 'react';
import classes from "./faqPage.module.css";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFaqApi} from "../../../common/axios/faqsApi";
import {getFaq} from "../../../redux/slices/faqsSlice";
import Way from "../../../components/UI/way/Way";


function FaqPage() {
    const dispatch = useDispatch()
    const {faq_slug} = useParams()
    const {faq} = useSelector(state => state.faqsReducer)

    useEffect(() => {
        fetchFaqApi(faq_slug).then(data => dispatch(getFaq(data)))
    }, [dispatch, faq_slug])

    return (
        <div className="cont">
            <Way way={`Главная / Помощь / ${faq.title}`}/>
            <div className={classes.faq}>
                <p className={classes.title}>{faq.title}</p>
                <p className={classes.description}>{faq.description}</p>
            </div>
        </div>
    );
}

export default FaqPage;