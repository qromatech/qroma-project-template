
export type QromaSiteManifestType = 'not-set' | 'publishedQromaFirmwareBuild';


export interface QromaSiteProtoFileDetails {
  protoPath: string
}
  

export interface QromaSiteProtoDetails {
  protofileDetails: QromaSiteProtoFileDetails[]
}


export interface QromaEsp32LoaderManifest {
  name: string
  manifestPath: string
}


export interface QromaFirmwareBuildManifest {
  projectid: string
  version: string

  qromaEsp32LoaderManifests: QromaEsp32LoaderManifest[]
  protoDetails: QromaSiteProtoDetails
}


export interface QromaFirmwareBuildManifestInfo {
  sourceUrl: string
  data: QromaFirmwareBuildManifest
}


export interface QromaSiteManifestDetails {

}


export interface QromaSiteManifest {
  type: QromaSiteManifestType
  path: string
  details : QromaSiteManifestDetails
}


export interface QromaSiteManifests {
  manifests: QromaSiteManifest[]
}