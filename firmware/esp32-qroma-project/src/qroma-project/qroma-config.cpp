#include "qroma-config.h"
#include <qroma/util/fs.h>
#include <qroma/util/qroma-persist.h>


// UpdateConfiguration updateConfiguration = {
//   .updateIntervalInMs = 10000,
//   .updateType = UpdateType_UpdateType_None,
// };

ProjectConfiguration projectConfiguration = {
  // initialize project configuration fields here
};


void saveDefaultConfigs() {
  if (!doesFileExist(QROMA_PROJECT_UPDATES_FILENAME)) {
    bool saved = savePbToPersistence(&updateConfiguration, QROMA_PROJECT_UPDATES_FILENAME, FwUpdateConfiguration_fields);
    if (!saved) {
      logError("ERROR SAVING {qroma_project.project_id} UPDATES CONFIG");
    }
  }

  if (!doesFileExist(QROMA_PROJECT_CONFIG_FILENAME)) {
    bool saved = savePbToPersistence(&projectConfiguration, QROMA_PROJECT_CONFIG_FILENAME, ProjectConfiguration_fields);
    if (!saved) {
      logError("ERROR SAVING {qroma_project.project_id} PROJECT CONFIG");
    }
  }
}
