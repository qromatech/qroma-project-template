#include "qroma-boards.h"
#include "../lib_ver.h"


void populateBoardFirmwareDetails(FirmwareDetails * firmwareDetails) {
  strncpy(response->version, LIB_VER, sizeof(response->version));
  strncpy(response->buildTime, __DATE__ " " __TIME__, sizeof(response->buildTime));
}
