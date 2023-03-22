/*
  LICENSE
  GNU General Public License v3 - see https://www.gnu.org/licenses/gpl-3.0.en.html

  Copyright (c) 2021  Albert Boehmler 
*/

{{ dev_boards.include_statement('#include "src/{qroma_project.project_id}/qroma-project.h', qroma_project) }}

// #REPLACE_WITH_PROJECT_REF_HEADER_INCLUDE
//         'arduino_ino_include_statement': f'#include "src/{qroma_project.project_id}/qroma-project.h"',
//         'src_project_include_statement': f'#include "{qroma_project.project_id}/qroma-project.h"',
//         'src_dotdot_protoheader_include_statement': f'#include "src/{qroma_project.project_id}/qroma-project.h"',


void setup() {
  qromaProjectSetup();
}


void loop() {
  qromaProjectLoop();
}
