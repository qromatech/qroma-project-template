#include "qroma-project.h"
#include "qroma-config.h"


int counter = 0;

void qromaProjectSetup()
{
  initQromaAppConfigWithDefaults(&_myQromaAppConfig, &qcMemBuffer, configQromaApp);
  startupQroma(&_myQromaAppConfig);

  delay(100);
}

void qromaProjectLoop()
{
  QromaHeartbeat * qhb = new QromaHeartbeat();
  delay(1000);
  Serial.print("TICK - ");
  Serial.println(counter);
  counter++;
}
