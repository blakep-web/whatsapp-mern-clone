import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@mui/material'

export const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p>This is the last messsage</p>
        </div>
    </div>
  )
}
