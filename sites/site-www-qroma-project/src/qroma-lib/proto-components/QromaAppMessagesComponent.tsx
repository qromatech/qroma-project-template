import React from "react"
import { MessageDetailsComponent } from "./MessageDetailsComponent"
import { MessageInfo } from "@protobuf-ts/runtime";


export const QromaAppMessagesComponent = ({messages}: {messages: MessageInfo[]}) => {
  // console.log("QromaAppMessagesComponent");
  // console.log(messages);

  return (
    <>
      {messages.map(m => (
        <MessageDetailsComponent
          typeName={m.typeName}
          fields={m.fields}
          key={m.typeName}
          />
      ))}
    </>
  )
}