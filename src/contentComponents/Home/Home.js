import React from 'react';
import './Home.css';
import storefront from '../../assets/ballagarey-final-v01.jpg';

export default function Home() {
    return (
        <div className="home_wrapper">
            <div>
                <img className="home_img" src={storefront} alt='Storefront' />
            </div>
            <div className="home_text">
                Company Headquarters
            </div>
        </div>
    )
}