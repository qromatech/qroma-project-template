import React from "react"
import { MessageType } from "@protobuf-ts/runtime"
import { useQromaPb64NewLineWebSerial } from "./webserial/QromaPb64NewLineWebSerial";


interface IQromaUpdateMonitorProps<T extends object> {
  monitorMessageType: MessageType<T>
}

export const QromaUpdateMonitor = <T extends object>(props: IQromaUpdateMonitorProps<T>) => {

  const qromaWebSerial = useQromaPb64NewLineWebSerial(props.monitorMessageType);

  const onUpdate = (update: T) => {
    console.log("MONITOR MESSAGE");
    console.log(update);
  }

  return (
    <div>
      Qroma monitor
      {props.monitorMessageType.typeName}
      <button onClick={async () => {
        const port = await qromaWebSerial.requestPort();
        console.log("PORT");
        console.log(port);
        qromaWebSerial.startMonitoring(onUpdate);
      }}>
        Start monitor
      </button>
      <button onClick={() => {
        qromaWebSerial.stopMonitoring();
      }}>
        Stop monitor
      </button>
    </div>
  )
}
