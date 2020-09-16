import React from 'react';
import '../css/PlayerHome.css';
import SidebarList from './SidebarList';
import Body from './Body';
import Footer from './Footer';

function PlayerHome({spotify}) {
    return (
        <div className="playerHome">
            <div className="playerHome__body">
                <SidebarList/>
                <Body/>
            </div>
            <Footer/>
           
        </div>
    )
}

export default PlayerHome
