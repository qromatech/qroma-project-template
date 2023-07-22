---
title: Command Device
---

# Command Device

import BrowserOnly from '@docusaurus/BrowserOnly';
import { MyAppCommand, MyAppResponse } from "../qroma-proto/hello-qroma";
import { QromaCommandDeviceApp } from "../qroma-app/QromaCommandDeviceApp";

<BrowserOnly>
{() =>
  <QromaCommandDeviceApp
    requestMessageType={MyAppCommand}
    responseMessageType={MyAppResponse}
    />
}
</BrowserOnly>