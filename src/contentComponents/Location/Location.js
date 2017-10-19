import React from 'react';
import './Location.css'
import map from '../../assets/map.jpg'

export default function Location() {
    return (
        <div>
            <div>
                <img className="location_img" src={map} alt='Map' />
            </div>
            <div className="location_text">
                Carrer de Muntaner, 493 | 08222 Barcelona, Catalunya
            </div>
        </div>
    )
}