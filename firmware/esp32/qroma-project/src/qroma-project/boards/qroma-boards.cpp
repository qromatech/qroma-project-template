#include "qroma-boards.h"
#include "../lib_ver.h"


void populateBoardFirmwareDetails(FirmwareDetails * firmwareDetails) {
  strncpy(firmwareDetails->version, LIB_VER, sizeof(firmwareDetails->version));
  strncpy(firmwareDetails->buildTime, __DATE__ " " __TIME__, sizeof(firmwareDetails->buildTime));
}
