---
title: Install Device Firmware
---

# Install Device Firmware to ESP32

import { EspWebInstallButton } from '../react-qroma-lib';
import { createManifestPath } from '../qroma-app/firmwareManifest';


Installation of the firmware for {{ qroma_project.project_id }} is easy to do using a Chrome or Edge desktop
web browser. Use a USB cable to connect your ESP32 board to your PC, then find the ESP32 board 
you are using below and click the button to install.

<div title='ESP32 Dev Board'>
  <EspWebInstallButton
    label='Install on ESP32 Dev Board'
    instructionsText="Plug your ESP32 Dev board into your computer's USB port and click the button below to install the firmware onto your ESP32 device."
    manifestPath={createManifestPath('qroma/versions/0.1.0/firmware/manifest-firmware.json')}
    />
</div>

<br/>
<br/>
<br/>
<a href='https://esphome.github.io/esp-web-tools/'>ESP Web Tools</a> is used to install firmware via WebSerial. The installer button uses a <a href={createManifestPath('qroma/versions/0.1.0/firmware/manifest-firmware.json')} target=''>manifest file </a> to know which files should be installed for its board.