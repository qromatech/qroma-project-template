import React, { useState } from "react"
// import { AllManifests } from "./AllManifests";
// import { QromaRequest } from "./QromaRequest";
// import { HelloQromaRequest, MathRequest, QromaHeartbeatUpdate } from "../qroma-proto/hello-qroma";
// import { QromaUpdateMonitor } from "./QromaUpdateMonitor";
// import { QromaWebSerialConnection } from "./QromaWebSerialConnection";
// import { QromaUpdateMonitor2 } from "./QromaUpdateMonitor2";
import { useTestHook } from "./TestHook";
import { TestHookViewer } from "./TestHookViewer";


export const QromaMonitorApp = () => {

  const [thStr, setThStr] = useState("a");

  const th = useTestHook({
    onIntervalCallback: () => {
      console.log("IN TEST HOOK CALLBACK");
      setThStr(thStr + "a");
    }
  });

  console.log("RENDERING QromaMonitorApp");

  return <div>
    QromaMonitorApp

    <TestHookViewer
      dataStr={thStr}
      />
    {/* <QromaWebSerialConnection>
      <QromaUpdateMonitor2 
        monitorMessageType={QromaHeartbeatUpdate}
        />
    </QromaWebSerialConnection> */}
  </div>
}