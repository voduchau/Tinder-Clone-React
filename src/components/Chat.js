import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css';

function Chat({ name, message, timestamp, profilePic }) {

    return (
        <div className="chat">
            <Avatar alt={name} src={profilePic} className="chat_image" />
            <div className="chat_details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
        </div>
    )
}

export default Chat
