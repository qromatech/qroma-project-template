import { Buffer } from 'buffer';
import { MessageType } from "@protobuf-ts/runtime";
import { useQromaWebSerial } from "./QromaWebSerial";


const qromaPb64NewLineWebSerialContext = {
  rxBuffer: new Uint8Array(),
};


export interface IQromaPb64NewLineWebSerial<T> {
  requestPort(): any
  startMonitoring(onUpdate: (update: T) => void): void
  stopMonitoring(): void
}


export const useQromaPb64NewLineWebSerial = <T extends object>(monitorMessageType: MessageType<T>): IQromaPb64NewLineWebSerial<T> => {
  const qromaWebSerial = useQromaWebSerial();

  const startMonitoring = async (onUpdate: (update: T) => void) => {
    const onData = (newData: Uint8Array) => {
      qromaPb64NewLineWebSerialContext.rxBuffer = new Uint8Array([...qromaPb64NewLineWebSerialContext.rxBuffer, ...newData]);

      let firstNewLineIndex = 0;

      while (firstNewLineIndex !== -1) {

        let firstNewLineIndex = qromaPb64NewLineWebSerialContext.rxBuffer.findIndex(x => x === 10);

        if (firstNewLineIndex === -1) {
          return;
        }

        if (firstNewLineIndex === 0) {
          qromaPb64NewLineWebSerialContext.rxBuffer = qromaPb64NewLineWebSerialContext.rxBuffer
            .slice(1, qromaPb64NewLineWebSerialContext.rxBuffer.length);
          continue;
        }

        try {
          const b64Bytes = qromaPb64NewLineWebSerialContext.rxBuffer.slice(0, firstNewLineIndex);
          qromaPb64NewLineWebSerialContext.rxBuffer = qromaPb64NewLineWebSerialContext.rxBuffer
            .slice(firstNewLineIndex, qromaPb64NewLineWebSerialContext.rxBuffer.length);

          const b64String = new TextDecoder().decode(b64Bytes);
          const messageBytes = Buffer.from(b64String, 'base64');
          const message = monitorMessageType.fromBinary(messageBytes);
  
          onUpdate(message);
    
        } catch (e) {
          console.log(e);
        }
      }
    }
    qromaWebSerial.startMonitoring(onData);
  }

  return {
    requestPort: qromaWebSerial.requestPort,
    startMonitoring: startMonitoring,
    stopMonitoring: qromaWebSerial.stopMonitoring,
  };
}
