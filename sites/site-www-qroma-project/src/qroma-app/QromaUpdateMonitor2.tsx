// import React, { useState } from "react"
// import { MessageType } from "@protobuf-ts/runtime";
// import { useQromaPb64NewLineWebSerial } from "./webserial/QromaPb64NewLineWebSerial";


// interface IQromaUpdateMonitorProps<T extends object> {
//   messageType: MessageType<T>
// }

// export const QromaUpdateMonitor2 = <T extends object>(props: IQromaUpdateMonitorProps<T>) => {
  
//   const [sValue, setSValue] = useState("NOT SET");

//   const qromaPb64NewLineWebSerial = useQromaPb64NewLineWebSerial({
//     messageType: props.messageType,
//     onMessage(message: T) {
//       console.log("QromaUpdateMonitor2");
//       console.log(message);
//       const messageStr = props.messageType.toJsonString(message);
//       setSValue(messageStr);
//     },
//   });
  
//   return (
//     <>
//       Qroma monitor2x
//       <button onClick={async () => {
//         const port = await qromaPb64NewLineWebSerial.requestPort();
//         console.log("PORT");
//         console.log(port);
//         // qromaPb64NewLineWebSerial.startMonitoring(onUpdate);
//         qromaPb64NewLineWebSerial.startMonitoring();
//       }}>
//         Start monitor
//       </button>
//       <button onClick={() => {
//         // qromaWebSerial.stopMonitoring();
//         qromaPb64NewLineWebSerial.stopMonitoring();
//       }}>
//         Stop monitor
//       </button>
//       <div>
//         {sValue}
//       </div>
//     </>
//   )
// }
