/*
  LICENSE
  GNU General Public License v3 - see https://www.gnu.org/licenses/gpl-3.0.en.html

  Copyright (c) 2021  Albert Boehmler 
*/

{{ dev_boards.include_statement('#include "{qroma_project.project_id}/qroma-project.h"') }}


void setup() {
  qromaProjectSetup();
}


void loop() {
  qromaProjectLoop();
}
