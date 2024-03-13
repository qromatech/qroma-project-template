#include "qroma-project.h"
#include "qroma-config.h"
#include "qroma-commands.h"
#include "qroma/qroma.h"



AppCommandProcessor<
  MyProjectCommand, MyProjectCommand_fields,
  MyProjectResponse, MyProjectResponse_fields
> myAppCommandProcessor(onMyProjectCommand);

QromaSerialCommApp myQromaApp;



void qromaProjectSetup()
{
  myQromaApp.setAppCommandProcessor(&myAppCommandProcessor);

  // myQromaApp.configureSerialCommIo([](QromaCommSerialIoConfig * config) {
  //   config->baudRate = 115200;
  //   config->rxBufferSize = 1000;
  //   config->txBufferSize = 1000;
  // });

  // myQromaApp.configureQromaApp([](QromaAppConfig * config) {
  //   config->loggerConfig.logLevel = Qroma_LogLevel_LogLevel_Info;
  // });

  
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

  // moved config initialization setup to qroma-config.cpp
  // updateConfiguration.updateIntervalInMs = 1000;
  // // updateConfiguration.updateType = UpdateType_UpdateType_ProgressIndicator;
  // // updateConfiguration.updateType = UpdateType_UpdateType_Interval;
  // updateConfiguration.updateType = UpdateType_UpdateType_None;

  saveDefaultConfigs();

  // if (!doesFileExist(QROMA_PROJECT_CONFIG_FILENAME)) {
  //   bool saved = savePbToPersistence(&updateConfiguration, QROMA_PROJECT_CONFIG_FILENAME, FwUpdateConfiguration_fields);
  //   if (!saved) {
  //     logError("ERROR SAVING INITIAL UPDATE CONFIG");
  //   }
  // }
}



int updateCounter = 0;


// void sendUptimeUpdateResponse() {
//   MyProjectResponse myProjectResponse = MyProjectResponse_init_zero;
//   myProjectResponse.which_response = MyProjectResponse_updateResponse_tag;
//   myProjectResponse.response.updateResponse.which_update = UpdateResponse_uptimeUpdateResponse_tag;
//   myProjectResponse.response.updateResponse.update.uptimeUpdateResponse.uptime = millis();

//   myQromaApp.sendQromaAppResponse<MyProjectResponse, MyProjectResponse_fields>(&myProjectResponse);

//   logInfo("Update from qroma-core-test-1");
// }

// void sendProgressUpdateResponse() {
//   MyProjectResponse myProjectResponse = MyProjectResponse_init_zero;
//   myProjectResponse.which_response = MyProjectResponse_updateResponse_tag;
//   myProjectResponse.response.updateResponse.which_update = UpdateResponse_progressIndicatorUpdateResponse_tag;

//   myProjectResponse.response.updateResponse.update.progressIndicatorUpdateResponse.progressIndicator[0] = '.';
//   int dotCount = updateCounter % 45;
//   for (int i=1; i < dotCount; i++) {
//     myProjectResponse.response.updateResponse.update.progressIndicatorUpdateResponse.progressIndicator[i] = '.';
//   }

//   myQromaApp.sendQromaAppResponse<MyProjectResponse, MyProjectResponse_fields>(&myProjectResponse);

//   logInfo("sendProgressUpdateResponse() complete");
// }


void qromaProjectLoop()
{
  // delay(updateConfiguration.updateIntervalInMs);

  QromaCoreManagementConfiguration * managementConfig = getQromaApp()->getCoreManagementConfigRef();
  if (managementConfig != NULL) {
    delay(managementConfig->projectLoopDelayInMs);
  } else {
    delay(100);
  }

  updateCounter++;

  // switch (updateConfiguration.updateType) {
  //   case UpdateType_UpdateType_Interval:
  //     sendUptimeUpdateResponse();
  //     break;
  //   case UpdateType_UpdateType_ProgressIndicator:
  //     sendProgressUpdateResponse();
  //     break;
  //   default:
  //     break;
  // }
}