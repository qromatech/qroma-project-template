import React from "react"
// import { AllManifests } from "./AllManifests";
import { QromaRequest } from "./QromaRequest";
import { HelloQromaRequest, MathRequest, QromaHeartbeatUpdate } from "../qroma-proto/hello-qroma";
import { QromaUpdateMonitor } from "./QromaUpdateMonitor";


export const QromaApp = () => {

  QromaHeartbeatUpdate.fromBinary(new Uint8Array());

  return <div>
    Qroma App
    {/* <AllManifests /> */}

    <QromaUpdateMonitor
      monitorMessageType={QromaHeartbeatUpdate}
      />

    <QromaRequest
      messageType={HelloQromaRequest}
      />
    <QromaRequest
      messageType={MathRequest}
      />
  </div>
}