import React from 'react'
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Sarah"
                message="hello! how are you ?"
                timestamp="35 minutes ago"
                profilePic="https://lavenderstudio.com.vn/wp-content/uploads/2019/10/dich-vu-chup-anh-profile-02-1-1024x682.jpg"
            />
            <Chat 
                name="Ellen"
                message="what are you doing ?"
                timestamp="50 minutes ago"
                profilePic="https://roses.vn/product_images/p/261/zen_9867_copy__94066_zoom.jpg"
            />
            <Chat 
                name="John"
                message="i love you..."
                timestamp="2 minutes ago"
                profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />

        </div>
    )
}

export default Chats;
