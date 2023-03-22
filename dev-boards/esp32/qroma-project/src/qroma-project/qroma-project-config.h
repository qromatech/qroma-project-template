#ifndef QROMA_PROJECT_CONFIG_H
#define QROMA_PROJECT_CONFIG_H

#include "qroma/qroma.h"
#include "../qroma-proto/hello-qroma.pb.h"


extern QromaAppConfig _myQromaAppConfig;
extern QromaCommMemBuffer qcMemBuffer;
extern PbCommandProcessor<HelloQroma, HelloQroma_fields> helloQromaPbProcessor;

void configQromaApp(QromaAppConfig * config);

#endif
