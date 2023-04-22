---
title: Command Device
---

# Command Device

import BrowserOnly from '@docusaurus/BrowserOnly';
import { HelloQromaRequest, HelloQromaResponse } from "../qroma-proto/hello-qroma";
import { QromaCommandDeviceApp } from "../qroma-app/QromaCommandDeviceApp";

<BrowserOnly>
{() =>
  <QromaCommandDeviceApp
    requestMessageType={HelloQromaRequest}
    responseMessageType={HelloQromaResponse}
    />
}
</BrowserOnly>
