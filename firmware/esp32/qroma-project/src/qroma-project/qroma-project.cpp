#include "qroma-project.h"
#include "qroma-commands.h"
#include "qroma/qroma.h"


AppCommandProcessor<
  MyAppCommand, MyAppCommand_fields,
  MyAppResponse, MyAppResponse_fields
> myAppCommandProcessor(onMyAppCommand);

QromaSerialCommApp myQromaApp;

extern SetUpdateConfiguration updateConfiguration;


void qromaProjectSetup()
{
  myQromaApp.setAppCommandProcessor(&myAppCommandProcessor);

  myQromaApp.configureSerialCommIo([](QromaCommSerialIoConfig * config) {
    config->baudRate = 115200;
    config->rxBufferSize = 1000;
    config->txBufferSize = 1000;
  });

  myQromaApp.configureQromaApp([](QromaAppConfig * config) {
    config->loggerConfig.logLevel = Qroma_LogLevel_LogLevel_Info;
  });

  updateConfiguration.updateIntervalInMs = 1000;
  // updateConfiguration.updateType = UpdateType_UpdateType_ProgressIndicator;
  updateConfiguration.updateType = UpdateType_UpdateType_None;

  myQromaApp.startupQroma();
}



int updateCounter = 0;


void sendUptimeUpdateResponse() {
  MyAppResponse myAppResponse = MyAppResponse_init_zero;
  myAppResponse.which_response = MyAppResponse_update_tag;
  myAppResponse.response.update.which_update = UpdateResponse_uptimeUpdateResponse_tag;
  myAppResponse.response.update.update.uptimeUpdateResponse.uptime = millis();

  myQromaApp.sendQromaAppResponse<MyAppResponse, MyAppResponse_fields>(&myAppResponse);

  logInfo("sendUptimeUpdateResponse() complete");
}

void sendProgressUpdateResponse() {
  MyAppResponse myAppResponse = MyAppResponse_init_zero;
  myAppResponse.which_response = MyAppResponse_update_tag;
  myAppResponse.response.update.which_update = UpdateResponse_progressIndicatorUpdateResponse_tag;

  myAppResponse.response.update.update.progressIndicatorUpdateResponse.progressIndicator[0] = '.';
  int dotCount = updateCounter % 45;
  for (int i=1; i < dotCount; i++) {
    myAppResponse.response.update.update.progressIndicatorUpdateResponse.progressIndicator[i] = '.';
  }

  myQromaApp.sendQromaAppResponse<MyAppResponse, MyAppResponse_fields>(&myAppResponse);

  logInfo("sendProgressUpdateResponse() complete");
}


void qromaProjectLoop()
{
  delay(updateConfiguration.updateIntervalInMs);
  updateCounter++;

  switch (updateConfiguration.updateType) {
    case UpdateType_UpdateType_Interval:
      sendUptimeUpdateResponse();
      break;
    case UpdateType_UpdateType_ProgressIndicator:
      sendProgressUpdateResponse();
      break;
    default:
      break;
  }
}