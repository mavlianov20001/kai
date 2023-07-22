import React from 'react';
import classes from "./contactsPage.module.css";
import {Link} from "react-router-dom";
import {links} from "../../links/links";
import i_whatsapp from "../../assets/images/icons/icon_whatsapp.svg";
import i_instagram from "../../assets/images/icons/icon_instagram.svg";
import i_facebook from "../../assets/images/icons/icon_facebook.svg";

function ContactsPage() {
    return (
        <div className={classes.contacts_block}>
            <div className={classes.title}>
                Контакты
            </div>
            <div className={classes.phones_block}>
                <div className={classes.phones}>
                    <div className={classes.title}>
                        Горячая линия
                    </div>
                    <div className={classes.content}>
                        + 996 (312) 40 12 40
                    </div>
                </div>
                <div className={classes.phones}>
                    <div className={classes.title}>
                        Заказ по телефону
                    </div>
                    <div className={classes.content}>
                        0707 40 12 40<br/>
                        0555 40 12 40
                    </div>
                </div>
            </div>
            <div className={classes.social}>
                <div>
                    <Link className={classes.social_item} to={links.whatsapp}>
                        <img src={i_whatsapp} alt='i_whatsapp'/></Link>
                    <Link className={classes.social_item} to={links.instagram}>
                        <img src={i_instagram} alt='i_instagram'/></Link>
                    <Link className={classes.social_item} to={links.facebook}>
                        <img src={i_facebook} alt='i_facebook'/></Link>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;