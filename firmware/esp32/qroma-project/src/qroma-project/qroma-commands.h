#ifndef QROMA_COMMANDS_H
#define QROMA_COMMANDS_H

#include "qroma/qroma.h"
#include "../qroma-proto/hello-qroma.pb.h"

extern PbCommandProcessor<HelloQroma, HelloQroma_fields> helloQromaPbProcessor;

#endif
