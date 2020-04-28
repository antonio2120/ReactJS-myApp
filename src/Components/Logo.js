import React from 'react';
import './Logo.css';

const Logo = (config) => {

    return (
        <div>
            <img src={'img/logo.png'} className={'logo'}/>
            {config.systemName}
        </div>
    )

}
export default Logo;