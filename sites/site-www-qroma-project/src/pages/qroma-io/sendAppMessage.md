---
title: Send Qroma App Message
---

# Qroma Send App Message MD

import BrowserOnly from '@docusaurus/BrowserOnly';
import { MyAppCommand, MyAppResponse } from "../../qroma-proto/my-project-messages";
import { QromaIoSendAppMessageComponent } from "../../react-qroma-lib";

<BrowserOnly>
{() =>
  <QromaIoSendAppMessageComponent
    requestMessageType={MyAppCommand}
    responseMessageType={MyAppResponse}
    />
}
</BrowserOnly>