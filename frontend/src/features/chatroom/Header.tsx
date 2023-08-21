import React from 'react';
import styles from "./chatroom.module.css";

interface Props {
    roomName: string;
}

const Header: React.FC<Props> = ({ roomName }) => {
    return (
        <div className = {styles.contentHeader}>
            <span>{roomName}</span>
        </div>
    );
};

export default Header;