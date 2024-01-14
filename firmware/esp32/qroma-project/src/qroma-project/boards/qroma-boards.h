#ifndef QROMA_BOARD_H
#define QROMA_BOARD_H

#include <qroma-proto/my-project-messages.pb.h>

extern void onInit();

extern void populateGetBoardDetailsResponse(GetBoardDetailsResponse * config);
extern void populateBoardFirmwareDetails(FirmwareDetails * firmwareDetails);
extern void handleSetBoardLightColorRequest(SetBoardLightColorRequest * request, SetBoardLightColorResponse * response);


#endif