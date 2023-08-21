import React, { ReactElement, useEffect } from "react";
import { io } from "socket.io-client";
import Chatroom from "./features/chatroom/Chatroom";

const App: React.FC = (): ReactElement => {
    useEffect(() => {
       const socket = io('http://localhost:5000');
    }, []);
    
    return (
        <div>
            <Chatroom></Chatroom>
        </div>
    );
};

export default App;