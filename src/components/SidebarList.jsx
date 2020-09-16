import React from 'react'
import SidebarOption from './SidebarOption';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded';
import '../css/SidebarList.css'

function SidebarList() {
    return (
        <div className="sidebarList">
            <h2 
            className='sidebarList__title'>
                Remarkable Robato
            </h2>
            <SidebarOption Icon={HomeRoundedIcon} title= "Home"/>
            <SidebarOption Icon={SearchRoundedIcon} title= "Search"/>
            <SidebarOption Icon={LibraryMusicRoundedIcon} title= "Library"/>
            
            <br/>
            <strong className="sidebarList__playlistHead"><em>YOUR PLAYLISTS</em></strong>
            <hr/>
        </div>
    );
} 

export default SidebarList
