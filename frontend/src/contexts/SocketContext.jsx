import React, { createContext, useEffect, useState } from 'react';
import {io} from 'socket.io-client';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to Socket.IO server
        const newSocket = io('http://localhost:5000'); // Replace with your server URL

        // Handle connection
        newSocket.on('connect', () => {
            console.log('Connected to server');
        });

        // Handle disconnection
        newSocket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        setSocket(newSocket);

        // Clean up on component unmount
        return () => {
            newSocket.disconnect();
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    );
};
