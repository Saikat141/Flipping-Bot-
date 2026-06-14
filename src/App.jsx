import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (inputText.trim() === '') return;

    const userMessage = inputText.trim();

    const newChatMessages = [
      ...chatMessages,
      {
        message: userMessage,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(userMessage);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
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
