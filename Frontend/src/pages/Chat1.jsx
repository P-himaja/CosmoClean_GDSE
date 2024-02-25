import React from "react";
import { useRef, useEffect } from "react";

const ChatMessage = (props) => {  //Chat message being sent by a user.
    const { text, uid, photoUrl } = props.message;

    //CSS hook for dynamic styling:
    const messageElement = useRef(null);

    useEffect(() => {
        if (messageElement.current) {
            messageElement.current.classList.add('message-right'); // Apply class dynamically
        }
    }, []);


    return (
        <div className="chat-message" ref={messageElement}>
            <img src={photoUrl} alt="" />
            <p>{text}</p>
        </div>
    );
}

export default ChatMessage;

