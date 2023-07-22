import React from 'react';
import classes from "./basketPage.module.css";

function BasketPage() {
    return (
        <div className="cont">
            <div className={classes.text}>
                <h1>Корзина пуста</h1>
            </div>
        </div>
    );
}

export default BasketPage;