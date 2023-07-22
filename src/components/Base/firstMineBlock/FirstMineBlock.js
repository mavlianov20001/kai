import React from 'react';
import classes from './FirstMineBlock.module.css'


const FirstMineBlock = () => {
    return (
        <div className={classes.first_block}>
                <p className={classes.p}>Наслаждайтесь нашей продукцией и улучшайте здоровье вместе с нами!</p>
                <button className={classes.btn}>Начать покупку</button>
        </div>
    )
}

export default FirstMineBlock;