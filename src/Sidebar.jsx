import React from 'react'
import "./Sidebar.css";

import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { SidebarChat } from './SidebarChat';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <Avatar src="https://pbs.twimg.com/profile_images/1666929756883808258/m2ziFiP3_400x400.jpg"/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className='sidebar__search'>
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder='Search or start new chat' type="text" />
            </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}
