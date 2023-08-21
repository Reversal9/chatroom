import React from "react";
import styles from "./chatroom.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const Chatroom: React.FC = () => {
    return (
        <div className = {styles.chatroom}>
            <Sidebar></Sidebar>
            <div className = {styles.content}>
                <Header roomName = "name goes here lol"></Header>
                <ChatWindow></ChatWindow>
                <ChatInput></ChatInput>
            </div>
        </div>
    );
};

export default Chatroom;