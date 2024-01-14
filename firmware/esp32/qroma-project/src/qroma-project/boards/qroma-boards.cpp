#include "qroma-boards.h"
#include "../lib_ver.h"


void populateBoardFirmwareDetails(FirmwareDetails * firmwareDetails) {
  strncpy(firmwareDetails->projectName, QROMA_PROJECT_NAME, sizeof(firmwareDetails->projectName));
  strncpy(firmwareDetails->version, LIB_VER, sizeof(firmwareDetails->version));
  strncpy(firmwareDetails->buildTime, __DATE__ " " __TIME__, sizeof(firmwareDetails->buildTime));
}
