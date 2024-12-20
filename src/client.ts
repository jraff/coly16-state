import { Client, getStateCallbacks } from "colyseus.js";
import { MyRoomState } from "./rooms/schema/MyRoomState";

async function connect() {
  const client = new Client("ws://localhost:2567");
  const room = await client.joinOrCreate<MyRoomState>("my_room");

  const $ = getStateCallbacks(room);

  $(room.state).players.onAdd((player, sessionId) => {
    console.log("player joined", player, sessionId);
  });

  $(room.state).players.onRemove((player, sessionId) => {
    console.log("player left", player, sessionId);
  });
}

connect();
