import React from "react";
import styles from "./chatroom.module.css";

const Message: React.FC<Message> = ({ sender, body }) => {
    return (
        <div className = {styles.contentChatWindowMessage}>
            <span>{sender}</span>
            <span>{body}</span>
        </div>
    );
}

export default Message;