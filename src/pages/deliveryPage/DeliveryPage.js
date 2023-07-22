import React from 'react';
import classes from "./deliveryPage.module.css"
import Banner from "../../assets/images/delivery/Banner.jpg"
import BannerProduct from "../../assets/images/delivery/Mask_group.png"
import Zakaz from "../../assets/images/delivery/Zakaz.jpg"
import bottomImg from "../../assets/images/delivery/bottom.png"
import Way from "../../components/UI/way/Way";

function DeliveryPage() {
    // const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className={classes.Main}>
            <div className="cont">
                <Way way={"Главная / Доставка"}/>
            <div className={classes.Banner}>
            
                <img src={Banner} alt="Banner"/>

            <div className={classes.imageContainer}>
                <img src={BannerProduct} alt="Banner Product"/>
                <button>Заказать доставку</button>
            </div>

            </div>
                <div className={classes.Text}>
                    <h4>
                        Выбирай
                        <p>Для онлайн заказов доступен<br/> полный ассортимент, а так же хиты<br/> мировых и кыргызских брендов</p>
                    </h4>
                    <h4>
                        Заказывай
                        <p>Заказывай продукты из любой<br/> точки города со скидкой и<br/> получай бонусы</p>
                    </h4>
                    <h4>
                        Встречай
                        <p>Быстрая доставка доставит<br/> продукты до двери вашего дома, <br/>вы просто закажите</p>
                    </h4>
                </div>

                <div className={classes.DostavkaButton}>
                    <button className={classes.Express}>Экспресс</button>
                    <button className={classes.Dostavka24}>Доставка 24/7</button>
                    <button className={classes.ZakazForPhone}>Заказ по телефону</button>
                </div>
                <div className={classes.OPLATA}>
                    <h4>
                        Наличными
                        <p>Вы можете оплатить заказ<br/> наличными при получении</p>
                    </h4>
                    <h4>
                        Картой курьеру
                        <p>Оплачивайте курьеру при<br/> полуении товара.Курьер<br/> возьмет с собой терминал.</p>
                    </h4>
                </div>
                <div className={classes.Zakaz}>
                    <img src={Zakaz} alt="Banner"/>
                    <button>Начать покупку</button>
                </div>
                <div className={classes.CircleCard}>
                    <img src={bottomImg} alt=''/>
                </div>
            </div>
        </div>
        
    );
}

export default DeliveryPage;