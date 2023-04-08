// import React from "react";
// import { QromaFirmwareBuildManifestInfo } from "./models/QromaSiteManifests";
// import { ProtofileDetailsComponent } from "./ProtofileDetailsComponent";


// export const QromaFirmwareBuildManifestComponent = ({manifestInfo}: {manifestInfo: QromaFirmwareBuildManifestInfo}) => {

//   const manifest = manifestInfo.data;
//   console.log("MANIFEST >>");
//   console.log(manifest);

//   return <div>
//     QromaFirmwareBuildManifest: {manifestInfo.sourceUrl}
//     {manifest.protoDetails.protofileDetails
//       .filter(pd => pd.protoPath.endsWith(".proto"))
//       .map(pd => (
//         <ProtofileDetailsComponent 
//           protofileDetails={pd}
//           key={pd.protoPath}
//           />
//       ))}
//   </div>
// }