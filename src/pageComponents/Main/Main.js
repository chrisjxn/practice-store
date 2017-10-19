import React from 'react';
import './Main.css';
import router from '../../router';

export default function Main() {
    return (
        <div className="main_wrapper">
            {router}
        </div>
    )
}