import { type } from "@colyseus/schema";
import { MyBaseRoomState } from "./MyBaseRoomState";

export class MyRoomState extends MyBaseRoomState {
  @type("string") mySynchronizedProperty: string = "Hello world";
}
