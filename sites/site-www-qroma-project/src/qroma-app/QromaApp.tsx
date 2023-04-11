import React from "react"
import { HelloQromaRequest, MathRequest, QromaHeartbeatUpdate } from "../qroma-proto/hello-qroma";
import { QromaUpdateMonitor } from "./QromaUpdateMonitor";
import { QromaRequest } from "../qroma-lib/QromaRequest";


export const QromaApp = () => {

  return <div>
    Qroma App

    <QromaUpdateMonitor
      messageType={QromaHeartbeatUpdate}
      />

    <QromaRequest
      messageType={HelloQromaRequest}
      />
    <QromaRequest
      messageType={MathRequest}
      />
  </div>
}