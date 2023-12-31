#ifdef QROMA_BOARD_DEF_TINYPICO_ESP32

#ifndef QBD_TINYPICO_ESP32
#define QBD_TINYPICO_ESP32

#include <TinyPICO.h>
#include "qroma-boards.h"
#include "../ws2812fx/qroma_init_settings.h"

// Initialise the TinyPICO library
TinyPICO tp = TinyPICO();


void setOnboardLightColor(int r, int g, int b) {
  tp.DotStar_SetPixelColor(r, g, b);
}

void onInit() {
  setOnboardLightColor(0, 60, 100);
}


void populateGetBoardDetailsResponse(GetBoardDetailsResponse * response) {
  strncpy(response->boardName, "UM TinyPICO Firmware", sizeof(response->boardName));
}


#endif

#endif