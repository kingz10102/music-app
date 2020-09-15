import React from 'react';
import '../css/PlayerHome.css';
import SidebarList from './SidebarList';
import Body from './Body';

function PlayerHome({spotify}) {
    return (
        <div className="playerHome">
            <div className="playerHome__body">
                <SidebarList/>
            </div>
           
        </div>
    )
}

export default PlayerHome
