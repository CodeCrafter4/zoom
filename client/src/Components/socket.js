
import { io } from "socket.io-client";

const socket = io("https://zoom-lime-sigma.vercel.app", {
  transports: ["polling", "websocket"],
});

export default socket;
