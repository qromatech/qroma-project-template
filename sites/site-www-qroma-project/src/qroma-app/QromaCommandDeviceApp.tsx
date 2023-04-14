import React, { useState } from "react"
import { MessageType } from "@protobuf-ts/runtime";
import { QromaRequestForm } from "react-qroma";
import { QromaCommMonitor } from 'react-qroma';


interface IQromaCommandDeviceAppProps<T extends object, U extends object> {
  requestMessageType: MessageType<T>
  responseMessageType: MessageType<U>
}


export const QromaCommandDeviceApp = <T extends object, U extends object>(props: IQromaCommandDeviceAppProps<T, U>) => {
  // export const QromaCommandDeviceApp = () => {
  
  const [response, setResponse] = useState("NOT SET");

  // const qromaPb64NewLineWebSerial = useQromaPb64NewLineWebSerial({
  //   messageType: props.messageType,
  //   onMessage(message: T) {
  //     console.log("QromaUpdateMonitor");
  //     console.log(message);
  //     const messageStr = props.messageType.toJsonString(message);
  //     setSValue(messageStr);
  //   },
  // });

  // if (qromaPb64NewLineWebSerial === null) {
  //   return (
  //     <>
  //     Serial not supported
  //     </>
  //   )
  // }
  
  return (
    <>
      {/* Qroma Command App  */}
      {props.requestMessageType.typeName} => {props.responseMessageType.typeName}

      {/* <button onClick={async () => {
        const port = await qromaPb64NewLineWebSerial.requestPort();
        console.log("PORT");
        console.log(port);
        qromaPb64NewLineWebSerial.startMonitoring();
      }}>
        Start monitor
      </button>
      <button onClick={() => {
        qromaPb64NewLineWebSerial.stopMonitoring();
      }}>
        Stop monitor
      </button> */}
      <div>
        {response}
      </div> 

      <QromaRequestForm
        requestMessageType={props.requestMessageType}
        />


      <QromaCommMonitor
        messageType={props.responseMessageType}
        />
    </>
  )
}