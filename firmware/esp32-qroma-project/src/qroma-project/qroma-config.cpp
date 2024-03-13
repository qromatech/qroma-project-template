#include "qroma-config.h"
#include <qroma/util/fs.h>
#include <qroma/util/qroma-persist.h>


MyProjectConfiguration _myProjectConfiguration = {
  // initialize project configuration fields here
  .userName = "abc\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
  .startupRed = 0,
  .startupGreen = 0,
  .startupBlue = 0,
};


void saveDefaultConfigs() {
  if (!doesFileExist(QROMA_PROJECT_CONFIG_FILENAME)) {
    bool saved = savePbToPersistence(&_myProjectConfiguration, QROMA_PROJECT_CONFIG_FILENAME, MyProjectConfiguration_fields);
    if (!saved) {
      logError("ERROR SAVING {qroma_project.project_id} PROJECT CONFIG");
    }
  }
}


void populateProjectConfig(MyProjectConfiguration * config) {
  memcpy(config, &_myProjectConfiguration, sizeof(MyProjectConfiguration));
}
