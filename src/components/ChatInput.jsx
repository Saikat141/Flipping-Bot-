import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const userMessage = inputText.trim();

    if (userMessage === '') return;

    const userMessageObject = {
      message: userMessage,
      sender: 'user',
      id: crypto.randomUUID()
    };

    const response = Chatbot.getResponse(userMessage);

    const robotMessageObject = {
      message: response,
      sender: 'robot',
      id: crypto.randomUUID()
    };

    setChatMessages([
      ...chatMessages,
      userMessageObject,
      robotMessageObject
    ]);

    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }}
      />

      <button
        onClick={sendMessage}
        className="send-button"
      >
        Send
      </button>
    </div>
  );
}