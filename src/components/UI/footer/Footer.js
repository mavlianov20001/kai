import React from 'react';
import classes from "./footer.module.css";
import i_facebook from '../../../assets/images/icons/icon_facebook.svg'
import i_instagram from '../../../assets/images/icons/icon_instagram.svg'
import i_whatsapp from '../../../assets/images/icons/icon_whatsapp.svg'
import logo from '../../../assets/images/logo.svg'
import {Link} from "react-router-dom";
import {links} from "../../../links/links";


function Footer() {
    return (
        <div className={`${classes.footer}`}>
            <div className={`cont ${classes.container}`}>
                <div className={classes.footer_logo_social}>
                    <Link to={links.base}
                          className={classes.logo}
                    >
                        <img src={logo} alt='logo'/>
                    </Link>
                    <div>
                        <Link className={classes.social_item} to={links.whatsapp}>
                            <img src={i_whatsapp} alt='i_whatsapp'/></Link>
                        <Link className={classes.social_item} to={links.instagram}>
                            <img src={i_instagram} alt='i_instagram'/></Link>
                        <Link className={classes.social_item} to={links.facebook}>
                            <img src={i_facebook} alt='i_facebook'/></Link>
                    </div>
                </div>
                <div className={classes.address}>
                    <p>Ибраимова 103 <br/> Бишкек</p>
                </div>
                <div>
                    <p className={classes.tel}>+996 (312) 40 12 40<br/>
                        0707 40 12 40<br/>
                        0555 40 12 40<br/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;