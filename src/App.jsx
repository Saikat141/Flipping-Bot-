import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';


import './App.css'


    ///define a state variable called chatMessages and a function to update it called setChatMessages using the useState hook. The initial value of chatMessages is an array of objects, where each object represents a chat message with properties for the message text, sender, and a unique id.

function App() {
        const [chatMessages, setChatMessages] = useState([{
          message: 'hello chatbot',
          sender: 'user',
          id: 'id1'
        }, {
          message: 'Hello! How can I help you?',
          sender: 'robot',
          id: 'id2'
        }, {
          message: 'can you get me todays date?',
          sender: 'user',
          id: 'id3'
        }, {
          message: 'Today is September 27',
          sender: 'robot',
          id: 'id4'
        }]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App;
