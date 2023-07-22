import React from 'react';
import jobStyles from './jobVacanciesPage.module.css';
import search from "../../../assets/images/icons/icon_search.svg";
import {Link, useNavigate} from "react-router-dom";
import {links} from "../../../links/links";

function JobVacanciesPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="cont">

                <div className={jobStyles.container}>
                    <div className={jobStyles.job_links}>
                        <p>
                            <button onClick={() => navigate("/")}>Главная</button>
                            / Вакансии
                        </p>

                    </div>
                    <form className={jobStyles.form_search}>
                        <button><img src={search} alt='search'/></button>
                        <input
                            className={jobStyles.search}
                            type={search}
                            placeholder="Поиск по вакансиям"
                        />
                    </form>

                    <div className={jobStyles.vacancy_card}>
                        <div className={jobStyles.container}>
                            <div className={jobStyles.job_top}>
                                <div className={jobStyles.job_name}>
                                    <h3>Product owner ( поддержка и коммуникации, удаленно )</h3>
                                </div>
                                <h3>г. Бишкек</h3>
                            </div>
                            <p>Мы ищем продукта в команду OKAi для развития инструментов поддержки и коммуникации
                                в мобильном приложении и на сайте. Продукт у нас - самостоятельный лидер команды,
                                принимающий решения в рамках своей части пользовательского пути</p>
                            <Link to={links.vacanciesMore}>
                                <button>Откликнуться</button>
                            </Link>
                        </div>
                    </div>
                    <div className={jobStyles.vacancy_card}>
                        <div className={jobStyles.container}>
                            <div className={jobStyles.job_top}>
                                <div className={jobStyles.job_name}>
                                    <h3>Ночной водитель - курьер</h3>
                                </div>
                                <h3>г. Бишкек</h3>
                            </div>
                            <p>
                                Компания OKAi специализируется на продаже натуральных продуктов для здорового питания.
                                Наша сеть активно растёт, в связи с этим, приглашаем к сотрудничеству автокурьеров на
                                своем авто!</p>
                            <button>Откликнуться</button>
                        </div>
                    </div>
                    <div className={jobStyles.vacancy_card}>
                        <div className={jobStyles.container}>
                            <div className={jobStyles.job_top}>
                                <div className={jobStyles.job_name}>
                                    <h3>SMM- менеджер</h3>
                                </div>
                                <h3>г. Ош</h3>
                            </div>
                            <p>
                                Привет!
                                В команду редакции OKAi ищем SMM-специалиста, с которым мы продолжим наш стремительный
                                рост
                                каналов качественно и количественно.</p>
                            <button>Откликнуться</button>
                        </div>
                    </div>
                    <div className={jobStyles.vacancy_card}>
                        <div className={jobStyles.container}>
                            <div className={jobStyles.job_top}>
                                <div className={jobStyles.job_name}>
                                    <h3>Грузчик на электротележке</h3>
                                </div>
                                <h3>г. Ош</h3>
                            </div>
                            <p>
                                Привет!
                                В команду редакции OKAi ищем грузчика на наш склад.Приглашаем вас на нашу дружную
                                команду.
                            </p>
                            <button>Откликнуться</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobVacanciesPage;