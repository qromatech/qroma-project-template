#include "qroma-project.h"
#include "qroma-commands.h"
#include "qroma/qroma.h"


QromaSerialCommApp myQromaApp;


void qromaProjectSetup()
{
  registerPbCommandFunction<
    HelloQromaRequest, HelloQromaRequest_fields,
    HelloQromaResponse, HelloQromaResponse_fields
  >(onHelloQroma, &myQromaApp);

  configureQromaApp([](QromaAppConfig * config) {
    config->loggerConfig.logLevel = Qroma_LogLevel_LogLevel_Error;
  }, &myQromaApp);

  configureSerialCommIo([](QromaCommSerialIoConfig * config) {
    config->baudRate = 115200;
    config->rxBufferSize = 1000;
    config->txBufferSize = 1000;
  }, &myQromaApp);

  startupQroma(&myQromaApp);
}


// void qromaProjectLoop()
// {
//   delay(1000);
// }

int counter = 0;

void qromaHeartbeatUpdateLoop()
{
  auto qhb = QromaHeartbeatUpdate();

  char tickBuffer[10];
  itoa(counter, tickBuffer, 10);
  counter++;

  strncat(qhb.heartbeatMessage, "Hello Qroma [{{ qroma_project.project_id }}]: ", sizeof(QromaHeartbeatUpdate::heartbeatMessage) - 1);
  strncat(qhb.heartbeatMessage, tickBuffer, sizeof(QromaHeartbeatUpdate::heartbeatMessage) - 1);
  qhb.uptime = millis();

  sendSerialPb64NewLineMessage<QromaHeartbeatUpdate, QromaHeartbeatUpdate_fields>(&qhb, &myQromaApp);
  delay(1000);
}
