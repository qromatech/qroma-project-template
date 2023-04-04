#include "qroma-project.h"
#include "qroma-commands.h"
#include "qroma/qroma.h"


QromaSerialCommApp myQromaApp;


void qromaProjectSetup()
{
  registerPbCommandFunction<
    HelloQroma, HelloQroma_fields,
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


void qromaProjectLoop()
{
  delay(1000);
}
