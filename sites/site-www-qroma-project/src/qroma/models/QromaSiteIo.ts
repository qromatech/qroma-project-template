import { Type } from "protobufjs"

export interface QromaProtoField {
  name: string
  type: string
}

export interface QromaSiteRequest {
  pbjsType: Type
}


export interface QromaSiteResponse {
  pbjsType: Type
}


export interface QromaSiteUpdate {
  pbjsType: Type
}

export interface QromaSiteIo {
  requests: QromaSiteRequest[]
  responses: QromaSiteResponse[]
  updates: QromaSiteUpdate[]
}