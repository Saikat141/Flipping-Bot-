import robot_profile_image from '../assets/robot.png';
import user_profile_image from '../assets/user.png';
import './ChatMessage.css';
 
 
 export function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src={robot_profile_image} width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div className={
            sender === 'user'
              ? 'chat-message-user'
              : 'chat-message-robot'
          }>
            {sender === 'robot' && (
              <img src={robot_profile_image} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && (
              <img src={user_profile_image} className="chat-message-profile" />
            )}
          </div>
        );
      }