import React from 'react'

import { useState } from 'react';
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material'
import axios from './axios';
import './Chat.css'

export const Chat = ({ messages }) => {

  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  }

  const sendMessage = async (event) => {
    event.preventDefault();

    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    const getMeridiem = currentHours > 11 ? "pm" : "am"

    const currentTime = () => {
      if (currentHours > 12) {
        currentHours -= 12;
      } else if (currentHours === 0) {
        currentHours = 12;
      }

      if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`
      }

      console.log(`${currentHours}:${currentMinutes}${getMeridiem}`);
      return `${currentHours}:${currentMinutes}${getMeridiem}`;
    }; 

    await axios.post("/messages/new", {
      name: 'Blake',
      message: input,
      timestamp: currentTime(),
      received: false,
    });

    setInput("");
  };

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>       
        </div>

      </div>
      
      <div className="chat__body">
        <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <p className={`chat__message ${message.received && "chat__receiver"}`}>
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">
                {message.timestamp}
              </span>
            </p>
          </li>
        ))}
        </ul>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form onSubmit={sendMessage}>
          <input value={input} onChange={inputChangeHandler} type="text" placeholder='Type a message' />
          <button type="submit">Send a message</button>
        </form>
        <MicOutlined />
      </div>

    </div>
  )
}
