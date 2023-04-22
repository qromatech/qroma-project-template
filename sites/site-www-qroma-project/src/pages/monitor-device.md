---
title: Monitor Device
---

# Monitor Device

import BrowserOnly from '@docusaurus/BrowserOnly';
import { QromaHeartbeatUpdate } from "../qroma-proto/hello-qroma";
import { QromaCommMonitor } from "react-qroma";


<BrowserOnly>
{() =>
  <QromaCommMonitor
    messageType={QromaHeartbeatUpdate}
    />
}
</BrowserOnly>