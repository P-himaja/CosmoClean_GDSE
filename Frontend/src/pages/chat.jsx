import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    setChatLog([...chatLog, { sender: 'You', message: userInput }]);
    setUserInput('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/chat', { message: userInput });
      const { message } = response.data;
      setChatLog([...chatLog, { sender: 'Chatbot', message }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div id="chat-container">
      <div id="chat-log">
        {chatLog.map((log, index) => (
          <div key={index}><strong>{log.sender}: </strong>{log.message}</div>
        ))}
      </div>
      <input type="text" value={userInput} onChange={handleInputChange} placeholder="Type your message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
