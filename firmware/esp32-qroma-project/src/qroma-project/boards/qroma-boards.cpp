#include "../qroma-core.h"
#include "qroma-boards.h"


void populateBoardDetails(BoardDetails * details) {
  strncpy(details->boardName, getBoardName(), sizeof(details->boardName));
  details->hasRgb = getBoardHasRgb();
}