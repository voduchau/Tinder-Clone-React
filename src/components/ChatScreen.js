import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'


function ChatScreen(props) {
    console.log(props,'xx')
    const [messages,setMessages] = useState([
        {
            name: "sarah",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            message: "what's up ?"
        },
        {
            name: "sarah",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            message: "Hows it going!"
        },
        {
            message: "what's up bro?"
        }
    ])
    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOUR MATCHED WITH SARAH ON 8/8/2020</p>
            { messages.map(message =>(
                message.name ? 
                <div className="chatScreen_message">
                    <Avatar alt={message.name} src={message.image} className="chat_image" />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                :
                <div className="chatScreen_message">
                    <p className="chatScreen_textUser">{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatScreen;
