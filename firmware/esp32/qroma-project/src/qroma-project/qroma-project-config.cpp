#include "qroma-project.h"


QromaAppConfig _myQromaAppConfig;

#define COMM_BUFFER_SIZE 100
uint8_t _commBuffer[COMM_BUFFER_SIZE];
QromaCommMemBuffer qcMemBuffer = QromaCommMemBuffer(_commBuffer, COMM_BUFFER_SIZE);



void onHelloQroma2(HelloQroma * message) {
  Serial.print("Hello ");
  Serial.println(message->name);
}
PbCommandProcessor<HelloQroma, HelloQroma_fields> helloQromaPbProcessor = PbCommandProcessor<HelloQroma, HelloQroma_fields>(onHelloQroma2);

QromaBytesProcessor *qromaBytesProcessors[] = { &helloQromaPbProcessor, };



void configQromaApp(QromaAppConfig * config) {
  config->serialIoConfig.qromaBytesProcessors = qromaBytesProcessors;
  config->serialIoConfig.qromaBytesProcessorsCount = sizeof(qromaBytesProcessors) / sizeof(QromaBytesProcessor*);
}
