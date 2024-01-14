#include "qroma-commands.h"
#include "qroma/qroma.h"
#include "boards/qroma-boards.h"


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


void handleNoArgCommand(NoArgCommands noArgCommand, MyProjectResponse * response) {
  switch (noArgCommand) {
    case NoArgCommands_Nac_NotSet:
      logError("NoArgCommand not set");
      break;
    case NoArgCommands_Nac_GetBoardDetailsRequest:
      response->which_response = MyProjectResponse_getBoardDetailsResponse_tag;
      populateGetBoardDetailsResponse(&(response->response.getBoardDetailsResponse));
      break;
    default:
      logError("Unrecognized NoArgCommand command");
      logError(noArgCommand);
      break;
  }
}


void onMyProjectCommand(MyProjectCommand * message, MyProjectResponse * response) {
  logInfo("ME APP!");
  logInfo(message->which_command);
  logInfo("<<>>");

  // set this so that handler implementations are flagged if they forget to set
  // the response as part of their logic
  response->which_response = MyProjectResponse_invalidCommandResponse_tag;

  switch (message->which_command) {
    case MyProjectCommand_noArgCommand_tag:
      handleNoArgCommand(message->command.noArgCommand, response);
      break;
    case MyProjectCommand_setUpdateConfiguration_tag:
      response->which_response = MyProjectResponse_setUpdateConfigurationResponse_tag;
      response->response.setUpdateConfigurationResponse = SetUpdateConfigurationResponse_init_zero;
      onSetUpdateConfiguration(&(message->command.setUpdateConfiguration),
        &(response->response.setUpdateConfigurationResponse));
      break;
    case MyProjectCommand_pingRequest_tag:
      response->which_response = MyProjectResponse_pingResponse_tag;
      response->response.pingResponse = PingResponse_init_zero;
      response->response.pingResponse.pingId = message->command.pingRequest.pingId;
      response->response.pingResponse.uptime = millis();
      break;
    case MyProjectCommand_getBoardDetailsRequest_tag:
      response->which_response = MyProjectResponse_getBoardDetailsResponse_tag;
      populateGetBoardDetailsResponse(&(response->response.getBoardDetailsResponse));
      break;
    case MyProjectCommand_setBoardLightColorRequest_tag:
      response->which_response = MyProjectResponse_setBoardLightColorResponse_tag;
      handleSetBoardLightColorRequest(&(message->command.setBoardLightColorRequest), 
        (&(response->response.setBoardLightColorResponse)));
      break;
    default:
      logError("Unrecognized MyProjectCommand command");
      logError(message->which_command);
      break;
  }

  if (response->which_response == MyProjectResponse_invalidCommandResponse_tag) {
    strncpy(response->response.invalidCommandResponse.message,
      "Unrecognized or unhandled project command",
      sizeof(response->response.invalidCommandResponse.message));
  }
}