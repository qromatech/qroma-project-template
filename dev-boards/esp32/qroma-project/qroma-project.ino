{{ dev_boards.include_statement('#include "src/{qroma_project.project_id}/qroma-project.h') }}


void setup() {
  qromaProjectSetup();
}

void loop() {
  qromaProjectLoop();
}
