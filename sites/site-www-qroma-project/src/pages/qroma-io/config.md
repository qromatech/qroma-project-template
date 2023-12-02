---
title: Qroma Lights Config
---

# Qroma Lights Config MD

import BrowserOnly from '@docusaurus/BrowserOnly';
import { QromaLightsConfig } from "../../qroma-proto/qroma-lights-types";
import { QromaIoShowQromaFileAsMessageTypeComponent } from "../../react-qroma-lib";

<BrowserOnly>
{() =>
  <QromaIoShowQromaFileAsMessageTypeComponent
    fileMessageType={QromaLightsConfig}
    filePath="/config.qroma"
    />
}
</BrowserOnly>