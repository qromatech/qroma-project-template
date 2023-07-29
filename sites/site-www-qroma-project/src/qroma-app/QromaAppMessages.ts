import { MathRequest } from "../qroma-proto/hello-qroma";
import { MathResponse } from "../qroma-proto/hello-qroma";
import { HelloQromaResponse, QromaHeartbeatUpdate } from "../qroma-proto/hello-qroma";
import { HelloQromaRequest } from "../qroma-proto/hello-qroma";


export const QromaAppMessages = [
  QromaHeartbeatUpdate,
  HelloQromaRequest,
  HelloQromaResponse,
  MathRequest,
  MathResponse,
];