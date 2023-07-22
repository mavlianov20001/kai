import React from 'react';
import s from './way.module.css'
import {useNavigate} from "react-router-dom";

function Way({way}) {
    const navigate = useNavigate()
    return (
        <div className={s.main}>
            <button onClick={()=> navigate(-1)}
                    className={s.way}
            >
                <span>{way}</span>
            </button>
        </div>
    );
}

export default Way;
