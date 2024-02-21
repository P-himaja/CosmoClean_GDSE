import React from "react";
import { useState, useEffect } from "react";
import "./css/community.scss";
import ChatMessage from "./components/Chat";

const Community = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");


    //Handle new message submission(simulated, actual sending logic not included):
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newMessage.trim()) {
            // Simulate adding a new message with dummy data
            const newMessageData = {
                id: Math.random().toString(36).substring(2, 15),
                content: newMessage,
                isSentByUser: true    //Indicates that message has been sent.
            };
            setMessages([...messages, newMessageData]);
            setNewMessage("");
        }
    };

    return (
        <div className="chat-app">
            <div className="chat-list">
                {messages.map((message) => (
                    <div key={message.id} className="message">
                        <p className={message.isSentByUser ? 'message-right' : ''}>{message.content}</p>
                    </div>
                ))}
            </div>
            <form className="message-form" onSubmit={handleSubmit}>
                <div className="input-area">
                    <input
                        className="message-input"
                        type="text"
                        value={newMessage}
                        onChange={(event) => setNewMessage(event.target.value)}
                        placeholder="Type your message..."
                    />
                </div>
                <div className="button-area">
                    <button type="submit" className="send-button">Send</button>
                </div>
            </form>
        </div>
    );

}


export default Community;