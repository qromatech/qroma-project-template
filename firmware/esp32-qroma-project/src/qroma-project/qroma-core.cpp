#include "qroma-lib-proto/qroma-config.pb.h"
#include "qroma-core.h"

const char * QromaProjectFirmwareVersion = QROMA_PROJECT_FW_VERSION;


HeartbeatConfiguration _heartbeatConfiguration = {
  .heartbeatType = HeartbeatType_HeartbeatType_Interval,
  .heartbeatIntervalInMs = 1000,
};


void populateHeartbeatConfiguration(HeartbeatConfiguration * config) {
  config->heartbeatType = _heartbeatConfiguration.heartbeatType;
  config->heartbeatIntervalInMs = _heartbeatConfiguration.heartbeatIntervalInMs;
}


void setHeartbeatConfiguration(HeartbeatConfiguration * config) {
  _heartbeatConfiguration.heartbeatType = config->heartbeatType;
  _heartbeatConfiguration.heartbeatIntervalInMs = config->heartbeatIntervalInMs;
}
