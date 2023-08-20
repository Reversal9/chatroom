import React, { ReactElement, useEffect } from "react";
import { io } from "socket.io-client";

const App: React.FC = (): ReactElement => {
    // const socket: Socket | undefined = useAppSelector(selectSocket);
    
    useEffect(() => {
       const socket = io('http://localhost:5000');
       console.log(socket)
    }, []);
    
    return (
        <div>
            <p>Hello World</p>
        </div>
    );
};

export default App;