import React from 'react';
import s from './aboutPage.module.css'
import Way from "../../../components/UI/way/Way";
import bannerLine from '../../../assets/images/about/banner-line.svg'
import bannerImg from '../../../assets/images/about/banner-image.png'
import tastyImg from '../../../assets/images/about/tasty-image.png'
import AboutThree from "../../../components/Base/about/abouThree/AboutThree";
import AboutFour from "../../../components/Base/about/aboutFour/AboutFour";
import OurPartners from "../../../components/Base/ourPartners/OurPartners";

function AboutPage() {
    return (
        <div className={s.main}>
            <div className="cont">
                <Way way={"Главная / О нас"}/>
                <div className={s.banner}>
                    <h2>Бренд натуральных продуктов</h2>
                    <div className={s.bannerBlock}>
                        <span>Наша цель- сделать полезную еду для здорового питания доступным каждому</span>
                    </div>
                    <div className={`abs ${s.bannerCircle}`}></div>
                    <img src={bannerLine} alt={`banner-line`} className={`abs ${s.bannerLine}`}/>
                    <img src={bannerImg} alt="banner-img" className={`abs ${s.bannerImg}`}/>
                </div>
                <div className={s.tasty}>
                    <div className={s.tastyBlock}>
                        <span>Делаем полезное <br/> вкусным</span>
                        <div className={s.tastyCircle}></div>
                        <img className={`abs ${s.tastyImg}`} src={tastyImg} alt="tasty-img"/>
                    </div>
                    <div className={s.tastyLeft}>
                        <div className={s.tastyTitle}>
                            <h2 className={s.parag}>5600 </h2>
                            <p className={s.tit}>Продуктов под брeндом <br/> LOGO</p>
                        </div>
                        <div className={s.tastyTitle}>
                            <h2 className={s.parag}>75 %</h2>
                            <p className={s.tit}>ассортимента отечественного <br/> производства</p>
                        </div>
                        <div className={s.tastyTitler}>
                            <h2 className={s.parag}>10600</h2>
                            <p className={s.tit}>продуктов доступны с нашей <br/> бесплатной доставкой</p>
                        </div>
                        <div className={s.tastyTitlef}>
                            <h2 className={s.parag}>4,5 <strong>млн</strong></h2>
                            <p className={s.tit}>покупателей выбирают LOGO</p>
                        </div>
                    </div>
                </div>
                <AboutThree/>
                <AboutFour/>
                <OurPartners/>
            </div>
        </div>
    );
}

export default AboutPage;