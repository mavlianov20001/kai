import React from 'react';
import style from './aboutFour.module.css'
import list1 from '../../../../assets/images/about/abouFour/list1.png'
import list2 from '../../../../assets/images/about/abouFour/list2.png'
import box from '../../../../assets/images/about/abouFour/box.png'
import line1 from '../../../../assets/images/about/abouFour/line1.png'
import line2 from '../../../../assets/images/about/abouFour/line2.png'

const AboutFour = () => {
    return (
        <div className={style.four}>
            <img className={style.list} src={list1} alt=""/>
            <div className={style.block_one}>
                <p>Мы всегда в открытом диалоге с покупателями, производителями и партнерамы.Это позволяет нам развивать компанию от обратной связи и постоянно улучшаться для вас.</p>
            </div>
            <img className={style.line1} src={line1} alt=""/>
            <img className={style.box} src={box} alt=""/>
            <div className={style.box2}>
                <p>Наши технологи находят уникальную продукты с лучшими составами.А вкус это еще один важный критерий оценки качества, в котором главные критики покупатели.</p>
            </div>
            <img className={style.list2} src={list2} alt=""/>
            <div className={style.box3}>
                <p>Помогаем покупателем поддерживать экопривычки.Делимся мнениями экспертов по здоровому подходу к жизни, не забывая что во всем важен баланс</p>
            </div>
            <img className={style.line2} src={line2} alt=""/>
        </div>
    );
};

export default AboutFour;