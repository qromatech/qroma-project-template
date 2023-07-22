#include "qroma-commands.h"
#include "qroma/qroma.h"

// uint32_t helloQromaCallCount = 0;

// void onHelloQroma(HelloQromaRequest * message, HelloQromaResponse * hqr) {
//   helloQromaCallCount++;

//   hqr->response[0] = 0;
//   strncat(hqr->response, "Hello qroma: ", sizeof(HelloQromaResponse::response));
//   strncat(hqr->response, message->name, sizeof(HelloQromaRequest::name));

//   hqr->callCount = helloQromaCallCount;
//   hqr->nameLength = strnlen(message->name, sizeof(HelloQromaRequest::name));
// }

SetUpdateConfiguration updateConfiguration = SetUpdateConfiguration_init_zero; 


void onSetUpdateConfiguration(SetUpdateConfiguration * message, SetUpdateConfigurationResponse * response) {
  if (message->updateIntervalInMs < 10 || message->updateIntervalInMs > 60000) {
    response->success = false;
    return;
  }

  updateConfiguration.updateType = message->updateType;
  updateConfiguration.updateIntervalInMs = message->updateIntervalInMs;
  
  response->success = true;
}


void onMyAppCommand(MyAppCommand * message, MyAppResponse * response) {
  logInfo("ME APP!");
  logInfo(message->which_command);
  logInfo("<<>>");
  switch (message->which_command) {
    // case MyAppCommand_setLightColor_tag:
    //   response->which_response = MyAppResponse_setLightColorResponse_tag;
    //   response->response.setLightColorResponse = SetLightColorResponse_init_zero;
    //   onSetLightColorCommand(&(message->command.setLightColor), &(response->response.setLightColorResponse));
    //   break;
    case MyAppCommand_setUpdateConfiguration_tag:
      response->which_response = MyAppResponse_setUpdateConfigurationResponse_tag;
      response->response.setUpdateConfigurationResponse = SetUpdateConfigurationResponse_init_zero;
      onSetUpdateConfiguration(&(message->command.setUpdateConfiguration), 
        &(response->response.setUpdateConfigurationResponse));
      break;
  }
}