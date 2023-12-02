---
title: Send Qroma App Message
---

# Qroma Send App Message MD

import BrowserOnly from '@docusaurus/BrowserOnly';
import { MyAppCommand, MyAppResponse } from "../../qroma-proto/hello-qroma";
import { QromaIoSendAppMessageComponent } from "../../react-qroma-lib";

<BrowserOnly>
{() =>
  <QromaIoSendAppMessageComponent
    requestMessageType={MyAppCommand}
    responseMessageType={MyAppResponse}
    />
}
</BrowserOnly>