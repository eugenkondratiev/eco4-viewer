/* eslint-disable react/prop-types */
// import React from 'react';
import stl from './Header.module.scss';
// eslint-disable-next-line react/prop-types
function Header({clickHeader, ...props}) {
    return (
        <header 
        title="Скрыть/показать содержание" 
        className={stl.root}
        onClick={()=>{clickHeader()}}
        >
            {props.children || " - "}
        </header>
    );
}

export default Header;