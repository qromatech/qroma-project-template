---
title: Command Device - Advanced
displayed_sidebar: advancedIoSidebar
---

# Command Device

import BrowserOnly from '@docusaurus/BrowserOnly';
import { MyAppCommand, MyAppResponse } from "../qroma-proto/hello-qroma";
import { QromaCommandDeviceApp } from "../react-qroma-lib";

<BrowserOnly>
{() =>
  <QromaCommandDeviceApp
    requestMessageType={MyAppCommand}
    responseMessageType={MyAppResponse}
    />
}
</BrowserOnly>