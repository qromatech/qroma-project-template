// import { Buffer } from 'buffer';
// import { MessageType } from "@protobuf-ts/runtime";
// import { useQromaWebSerial } from "./QromaWebSerial";
// import { useEffect, useState } from 'react';


// // const qromaPb64NewLineWebSerialContext = {
// //   rxBuffer: new Uint8Array(),
// // };


// // export interface IQromaPb64NewLineWebSerial<T> {
// //   requestPort(): any
// //   // startMonitoring(onUpdate: (update: T) => void): void
// //   startMonitoring(): void
// //   stopMonitoring(): void
// // }


// export const useQromaPb64NewLineWebSerial = <T extends object>(
//   {messageType, onMessage, onConnect, onDisconnect}: {
//     messageType: MessageType<T>,
//     onMessage: (message: T) => void,
//     onConnect?: () => void,
//     onDisconnect?: () => void,
//   }
// ) => {

//   const qNavigator: any = window.navigator;
//   const qSerial = qNavigator.serial;

//   const _onConnect = () => {
//     if (onConnect) {
//       onConnect();
//     }
//   }

//   const _onDisconnect = () => {
//     if (onDisconnect) {
//       onDisconnect();
//     }
//   }

//   useEffect(() => {
//     qSerial.addEventListener("connect", _onConnect)
//     qSerial.addEventListener("disconnect", _onDisconnect)
//     return () => {
//       qSerial.removeEventListener("connect", _onConnect)
//       qSerial.removeEventListener("disconnect", _onDisconnect)
//     }
//   })

//   // const [rxBuffer, setRxBuffer] = useState(new Uint8Array());

//   // const startMonitoring = async (onUpdate: (update: T) => void) => {
//   const startMonitoring = async () => {
//     let rxBuffer = new Uint8Array();

//     const setRxBuffer = (update: Uint8Array) => {
//       rxBuffer = update;
//     }

//     const onData = (newData: Uint8Array) => {
//       // qromaPb64NewLineWebSerialContext.rxBuffer = new Uint8Array([...rxBuffer, ...newData]);
//       let currentRxBuffer = new Uint8Array([...rxBuffer, ...newData]);

//       let firstNewLineIndex = 0;

//       while (firstNewLineIndex !== -1) {

//         // let firstNewLineIndex = qromaPb64NewLineWebSerialContext.rxBuffer.findIndex(x => x === 10);
//         let firstNewLineIndex = currentRxBuffer.findIndex(x => x === 10);

//         if (firstNewLineIndex === -1) {
//           // continue;
//           setRxBuffer(currentRxBuffer);
//           return;
//         }

//         if (firstNewLineIndex === 0) {
//           // qromaPb64NewLineWebSerialContext.rxBuffer = qromaPb64NewLineWebSerialContext.rxBuffer
//           //   .slice(1, qromaPb64NewLineWebSerialContext.rxBuffer.length);
//           currentRxBuffer = currentRxBuffer.slice(1, currentRxBuffer.length);
//           continue;
//         }

//         try {
//           // const b64Bytes = qromaPb64NewLineWebSerialContext.rxBuffer.slice(0, firstNewLineIndex);
//           // qromaPb64NewLineWebSerialContext.rxBuffer = qromaPb64NewLineWebSerialContext.rxBuffer
//           //   .slice(firstNewLineIndex, qromaPb64NewLineWebSerialContext.rxBuffer.length);
          
//           const b64Bytes = currentRxBuffer.slice(0, firstNewLineIndex);
//           currentRxBuffer = currentRxBuffer.slice(firstNewLineIndex, currentRxBuffer.length);

//           const b64String = new TextDecoder().decode(b64Bytes);
//           const messageBytes = Buffer.from(b64String, 'base64');
//           const message = messageType.fromBinary(messageBytes);
  
//           // onUpdate(message);
//           onMessage(message);
    
//         } catch (e) {
//           console.log("CAUGHT ERROR");
//           console.log(e);
//         }
//       }
//       setRxBuffer(currentRxBuffer);
//     }
//     qromaWebSerial.startMonitoring(onData);
//   }

//   console.log("CALLING useQromaWebSerial");
//   const qromaWebSerial = useQromaWebSerial();

//   return {
//     requestPort: qromaWebSerial.requestPort,
//     startMonitoring: startMonitoring,
//     stopMonitoring: qromaWebSerial.stopMonitoring,
//   };
// }