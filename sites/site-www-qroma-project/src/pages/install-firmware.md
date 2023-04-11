---
title: Install Device Firmware
---

# Install Device Firmware

You don't need React to write simple standalone pages.


# Install to ESP32

<!-- import AdSenseHozo from '@site/src/adsense/AdSenseHozo'; -->
<!-- import InstallFirmwaresPage from '@site/src/panels/device-install/InstallFirmwaresPage';
import { QCard } from '@site/src/components/qcard/QCard'; -->
import { EspWebInstallButton } from '@site/src/qroma-lib/EspWebInstallButton';


<!-- <AdSenseHozo /> -->

[Qromatech for ESP32](https://github.com/qromatech/esp32-qromatech) is an open source PlatformIO project. 
It handles light control and animations on an ESP32 controller using serial communication
and Bluetooth. 

Installation of the Qromatech light control software is easy to do using a Chrome or Edge desktop
web browser. Use a USB cable to connect your ESP32 board to your PC, then find the ESP32 board 
you are using below and click the button to install.

<div title='ESP32 Dev Board'>
  <EspWebInstallButton
    label='Install on ESP32 Dev Board'
    instructionsText="Plug your ESP32 Dev board into your computer's USB port and click the button below to install Qromatech onto your ESP32 device."
    manifestPath='/qroma/versions/0.1.0/manifest-esp32dev.json'
    />
</div>

<!-- 
<QCard title='TinyPico'>
  <EspWebInstallButton
    label='Install on TinyPico Board'
    instructionsText="Plug your TinyPico board into your computer's USB port and click the button below to install Qromatech onto your ESP32 device."
    manifestPath='/firmware/qromastrip/manifest-tinypico.json'
    />
</QCard> -->

<!-- <InstallFirmwaresPage /> -->