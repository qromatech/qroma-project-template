import { Type } from "protobufjs"
import React from "react"
import MessageComponent from "./MessageComponent"


export const MessageForm = ({messageType}: {messageType: Type}) => {
  return <div>
    Message Form
    <div>{messageType.name}</div>
    <MessageComponent
      messageType={messageType}
      />
  </div>
}