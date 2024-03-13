#ifndef QROMA_PROJECT_CONFIG_H
#define QROMA_PROJECT_CONFIG_H

#include "qroma-commands.h"

extern FwUpdateConfiguration updateConfiguration;
extern ProjectConfiguration projectConfiguration;

#define QROMA_PROJECT_UPDATES_FILENAME "/{qroma_project.project_id}-updates.qroma"
#define QROMA_PROJECT_CONFIG_FILENAME "/{qroma_project.project_id}-config.qroma"


void saveDefaultConfigs();

#endif
