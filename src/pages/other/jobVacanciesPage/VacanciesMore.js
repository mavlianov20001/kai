import React from 'react';
import {useNavigate} from "react-router-dom";
import jobStyles from './jobVacanciesPage.module.css';
import {links} from "../../../links/links";

function VacanciesMore() {
    const navigate = useNavigate();
    return (

        <>
            <div className="cont">
                <div className={jobStyles.container}>
                    <div className={jobStyles.jobMore}>
                        <div className={jobStyles.job_links}>
                            <p><button onClick={()=>navigate("/")}>Главнаяㅤ/ㅤ</button>
                                <button onClick={()=>navigate(links.jobVacancies)}>Вакансииㅤ/ㅤ</button>
                                Product owner </p>
                        </div>
                        <div className={jobStyles.typeJob}>
                            <p>офис</p>
                        </div>
                        <div className={jobStyles.jobTitle}>
                            <h1>
                                Product owner ( поддержка и коммуникации, удаленно )
                            </h1>
                            <p>30 000 - 50 000с</p>
                        </div>
                    </div>
                    <div className={jobStyles.jobConditions}>
                        <h3>Условия</h3>
                        <ul>
                            <li>Требуемый опыт работы: от 1 до 3 лет</li>
                            <li>Удаленная работа</li>
                            <li>Полная занятость</li>
                        </ul>
                    </div>
                    <div className={jobStyles.jobProfile}>
                    <button>Заполнить анкету</button>
                        <p>Привет! <br/>
                            Мы ищем продакта в команду OKAi для развития инструментов поддержки и коммуникации в мобильном приложении и на сайте. Продакт у нас - самостоятельный лидер команды, принимающий решения в рамках своей части пользовательского пути
                        </p>
                    </div>
                    <div className={jobStyles.jobDuty}>
                        <h3>Обязанности:</h3>
                        <ul>
                            <li>отвечать за опыт взаимодействия клиентов с поддержкой внутри приложения и на сайте; выстраивать сервисные коммуникации и обратную связь с клиентами</li>
                            <li>быть лидером продуктовой команды, и тесно взаимодействовать со стейкхолдерами</li>
                            <li>управлять бэклогом продукта и приоритизацией</li>
                            <li>собирать и анализировать обратную связь от пользователей, организовывать качественные и количественные исследования совместно с UX-командой</li>
                            <li>формулировать и ставить цели развития продукта, опираясь на метрики</li>
                            <li>совместно с дизайнерами прорабатывать UX/UI</li>
                            <li>формулировать требования к продукту для команд разработки, функциональные и не функциональные</li>
                            <li>помогать командам прорабатывать технические решения для достижения поставленных целей</li>
                            <li>помогать командам организовывать процессы внедрения и использования новых технических решений в рамках продукта</li>
                        </ul>
                        <h3>Требования:</h3>
                        <ul>
                            <li>опыт от 2х лет управления мобильными продуктами</li>
                            <li>знать, как устроена продуктовая разработка</li>
                            <li>плотно работать с метриками, иметь опыт в проведении а/б тестов</li>
                            <li>в  команде выстроены процессы discovery и delivery</li>
                            <li>уметь ориентироваться в технических аспектах продуктов и системы</li>
                            <li>структурно мыслить, уметь систематизировать информацию</li>
                        </ul>
                        <h3>Преимуществом будет:</h3>
                        <ul>
                            <li>опыт работы в продукте с DAU от 500 тыс. пользователей</li>
                            <li>опыт работы в ритейл е/e-commerce</li>
                            <li>опыт работы в направлении клиентской поддержки и обратной связи</li>
                        </ul>
                    </div>
                    <div className={jobStyles.jobSkills}>
                        <h3>Ключевые навыки</h3>
                        <div className={jobStyles.skillsInner}>
                            <div className={jobStyles.skillsBut}>
                                Работа в команде
                            </div>
                            <div className={jobStyles.skillsBut}>
                                A/B тесты
                            </div>
                            <div className={jobStyles.skillsBut}>
                                Коммуникация
                            </div>
                            <div className={jobStyles.skillsBut}>
                                Анализ поведения пользователей
                            </div>
                        </div>
                    </div>
                    <div className={jobStyles.address}>
                        <p>Адрес</p>
                        <p>г. Бишкек <br/>
                            Ибраимова 103 </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VacanciesMore;