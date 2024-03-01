---
title: Qroma Comm File Uploader
---

# Qroma Comm File Uploader

import { useEffect } from "react"
import BrowserOnly from '@docusaurus/BrowserOnly';
import { QromaCommFileUploadComponent } from "../react-qroma-lib/qroma-lib/file-explorer/QromaCommFileUploadComponent";


<BrowserOnly>
{() => {
  return (
    <QromaCommFileUploadComponent
      />
  )
}}
</BrowserOnly>