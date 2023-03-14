#include "qroma-project.h"

int counter = 0;

void qromaProjectSetup()
{
    Serial.begin(115200);
    delay(1000);
}

void qromaProjectLoop()
{
  delay(1000);
  Serial.print("Hello Qroma World!");
  Serial.println(counter);
  counter++;
}
