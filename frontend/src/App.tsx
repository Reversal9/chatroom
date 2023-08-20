import React, { ReactElement, useEffect } from 'react';
import { io } from 'socket.io-client';
import styles from "App.module.css";

const App: React.FC = (): ReactElement => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    );
};

export default App;