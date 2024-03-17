#include "qroma-project.h"
#include "qroma-config.h"
#include "qroma-commands.h"
#include "qroma/qroma.h"


AppCommandProcessor<
  MyProjectCommand, MyProjectCommand_fields,
  MyProjectResponse, MyProjectResponse_fields
> myAppCommandProcessor(onMyProjectCommand);

QromaSerialCommApp myQromaApp;

int updateCounter = 0;



void qromaProjectSetup()
{
  myQromaApp.setAppCommandProcessor(&myAppCommandProcessor);
  
  myQromaApp.configureQromaCore([](QromaCoreConfig * config) {
    config->has_serialIoConfig = true;
    config->serialIoConfig = {
      .baudRate = 115200,
      .rxBufferSize = 1000,
      .txBufferSize = 1000,
    };

    config->has_serialProcessingConfig = true;
    config->serialProcessingConfig = {
      .msDelayInProcessingLoop = 10,
    };

    config->has_loggingConfig = true;
    config->loggingConfig = {
      .logLevel = Qroma_LogLevel_LogLevel_Info,
    };

    config->has_managementConfig = true;
    config->managementConfig = {
      .projectLoopDelayInMs = 100,
      .has_heartbeatConfiguration = true,
      .heartbeatConfiguration = {
        .heartbeatType = HeartbeatType_HeartbeatType_Interval,
        .heartbeatIntervalInMs = 1000,
      },
    };
  });

  myQromaApp.startupQroma();

  saveDefaultConfigs();
}


void qromaProjectLoop()
{
  logInfoUintWithDescription("QROMA PROJECT LOOP - ", updateCounter);
  myQromaApp.tick();

  updateCounter++;
}
