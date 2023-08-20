import axios, { AxiosResponse } from 'axios';
import { io } from "socket.io-client";

export const getSocket = async() => {
    return io();
};

