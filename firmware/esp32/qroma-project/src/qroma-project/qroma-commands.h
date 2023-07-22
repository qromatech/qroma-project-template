#ifndef QROMA_COMMANDS_H
#define QROMA_COMMANDS_H

#include "../qroma-proto/hello-qroma.pb.h"

void onMyAppCommand(MyAppCommand * message, MyAppResponse * hqr);

#endif
