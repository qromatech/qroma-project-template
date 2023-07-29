import React, { useState } from "react"
import { MessageType } from "@protobuf-ts/runtime";
import { IUseQromaAppWebSerialInputs, QromaCommResponse, QromaRequestForm, useQromaAppWebSerial } from "../react-qroma-lib";
import { QromaCommMonitor } from '../react-qroma-lib';


interface IQromaCommandDeviceAppProps<T extends object, U extends object> {
  requestMessageType: MessageType<T>
  responseMessageType: MessageType<U>
}


export const QromaCommandDeviceApp = <T extends object, U extends object>(props: IQromaCommandDeviceAppProps<T, U>) => {
  
  const [response, setResponse] = useState("NOT SET");

  const inputs: IUseQromaAppWebSerialInputs<T, U> = {
    onQromaAppResponse: (appMessage: U) => {
      console.log("QromaRequestForm - onQromaAppResponse");
      console.log(appMessage);
    },
    onQromaCommResponse: (message: QromaCommResponse) => {
      console.log("QromaRequestForm - onQromaCommResponse");
      console.log(message);
    },
    commandMessageType: props.requestMessageType,
    responseMessageType: props.responseMessageType,
    onPortRequestResult: () => { console.log("PORT REQUEST COMPLETE") }
  }
  const qromaWebSerial = useQromaAppWebSerial(inputs);
  
  return (
    <>
      {props.requestMessageType.typeName} => {props.responseMessageType.typeName}

      <div>
        {response}
      </div> 

      <QromaRequestForm
        requestMessageType={props.requestMessageType}
        responseMessageType={props.responseMessageType}
        qromaWebSerial={qromaWebSerial}
        />


      <QromaCommMonitor
        messageType={props.responseMessageType}
        />
    </>
  )
}