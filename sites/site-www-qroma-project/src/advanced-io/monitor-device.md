---
title: Monitor Device
displayed_sidebar: advancedIoSidebar
---

# Monitor Device

import BrowserOnly from '@docusaurus/BrowserOnly';
import { MyAppResponse } from "../qroma-proto/my-project-messages";
import { QromaCommMonitor } from "../react-qroma-lib";


<BrowserOnly>
{() =>
  <QromaCommMonitor
    responseMessageType={MyAppResponse}
    />
}
</BrowserOnly>