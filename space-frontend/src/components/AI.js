import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './AI.css';

function AI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('What is Space?');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput('');

      try {
        setLoading(true);
        const response = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCF-WWD3d2tx_lcKPk0b3Qo2rvir6Qox2M',
          {
            "contents": [
              {
                "parts": [
                  {
                    "text": input
                  }
                ]
              }
            ]
          }
        );
        console.log(response);
        const botResponse = response.data.candidates[0].content.parts[0].text;
        setLoading(false);
        setMessages([...newMessages, { text: botResponse, user: false }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setLoading(false);
        setMessages([...newMessages, { text: 'Error: Could not get response from AI', user: false }]);
      }
    }
  };

  return (
    <div className="chatbot-container">
       <video autoPlay loop muted>
            <source src="/static/images/mitors.mp4" type="video/mp4" />
            </video>
      <h1 className="header">SpaceExpo AI🚀</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'message-user' : 'message-bot'}`}>
            <div className={`message-content ${msg.user ? 'user' : 'bot'}`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="loader-wrapper">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>🚀
          </div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="send-button" onClick={handleSendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default AI;
