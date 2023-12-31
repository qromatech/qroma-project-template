#ifdef QROMA_BOARD_DEF_ESP32_DEV

#ifndef QBD_ESP32_DEV
#define QBD_ESP32_DEV

#include "qroma-boards.h"


void onInit() { }

void populateGetBoardDetailsResponse(GetBoardDetailsResponse * response) {
  strncpy(response->boardName, "ESP 32 Dev Board Firmware");
}


#endif

#endif