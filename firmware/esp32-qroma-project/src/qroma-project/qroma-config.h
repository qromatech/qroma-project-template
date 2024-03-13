#ifndef QROMA_PROJECT_CONFIG_H
#define QROMA_PROJECT_CONFIG_H

#include "qroma-commands.h"

extern MyProjectConfiguration _myProjectConfiguration;

#define QROMA_PROJECT_CONFIG_FILENAME "/{{ qroma_project.project_id }}-config.qroma"


void saveDefaultConfigs();
void populateProjectConfig(MyProjectConfiguration * config);

#endif