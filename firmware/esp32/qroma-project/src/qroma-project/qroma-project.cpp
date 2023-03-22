#include "qroma-project.h"
#include "qroma-project-config.h"


// char MESSAGE_OUT[200];
// int _mostRead = 0;
// int _lastReadCount = 0;
// int _totalReadCount = 0;


// void resetStats() {
//   _mostRead = 0;
//   _lastReadCount = 0;
//   _totalReadCount = 0;
// }

// void onReceive() {
//   // bool dataRead = false;
//   int count = 0;
//   _lastReadCount = 0;
//   memset(MESSAGE_OUT, 0, sizeof MESSAGE_OUT);

//   while (Serial.available()) {
//     char incomingByte = Serial.read();
//     MESSAGE_OUT[count] = incomingByte;

//     count++;
//     _lastReadCount++;
//     _totalReadCount++;

//     if (count > _mostRead) {
//       _mostRead = count;
//     }
//     // cbAddToCommBuffer(incomingByte, millis());
//     // dataRead = true;
//   }

//   // return dataRead;
//   //   strncpy(MESSAGE_OUT, "RECEIVED");
//   //   _packetSize = packetSize;
// }

// void onHelloQroma(HelloQroma * message) {
//   Serial.print("Hello ");
//   Serial.println(message->name);
// }

// #define COMM_BUFFER_SIZE 100
// uint8_t _commBuffer[COMM_BUFFER_SIZE];
// QromaCommMemBuffer qcMemBuffer = QromaCommMemBuffer(_commBuffer, COMM_BUFFER_SIZE);

// // QromaBytesProcessor *qromaBytesProcessors[] = { &helloQromaPbProcessor, };

// void configQromaApp(QromaAppConfig * config) {
//   config->serialIoConfig.qromaBytesProcessors = qromaBytesProcessors,
//   config->serialIoConfig.qromaBytesProcessorsCount = sizeof(qromaBytesProcessors) / sizeof(QromaBytesProcessor*),

// }

int counter = 0;

void qromaProjectSetup()
{
  initQromaAppConfigWithDefaults(&_myQromaAppConfig, &qcMemBuffer, configQromaApp);
  startupQroma(&_myQromaAppConfig);

  delay(100);
}

void qromaProjectLoop()
{
  QromaHeartbeat * qhb = new QromaHeartbeat();
  delay(1000);
  Serial.print("TICK - ");
  // Serial.print("Hello Qroma World!");
  Serial.println(counter);
  counter++;
  // Serial.println(MESSAGE_OUT);
  // Serial.println(_mostRead);
  // Serial.println(_lastReadCount);
  // Serial.println(_totalReadCount);
}
