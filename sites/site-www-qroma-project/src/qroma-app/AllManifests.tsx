// import React, { useEffect, useState } from "react";
// import { QromaFirmwareBuildManifest, QromaFirmwareBuildManifestInfo, QromaSiteManifest, QromaSiteManifests } from "./models/QromaSiteManifests";
// import { QromaFirmwareBuildManifestComponent } from "./QromaFirmwareBuildManifest";


// export const AllManifests = () => {

//   const manifestsUrl = "/qroma/manifests.json";

//   const [allManifests, setAllManifests] = useState([] as QromaFirmwareBuildManifestInfo[]);

//   const fetchManifest = async (qromaSiteManifest: QromaSiteManifest): Promise<QromaFirmwareBuildManifestInfo | null> => {
//     if (qromaSiteManifest.type === "publishedQromaFirmwareBuild") {
//       const manifestDataResponse = await fetch(qromaSiteManifest.path);
//       console.log("MANIFEST DATA manifestDataResponse");
//       console.log(manifestDataResponse);
//       const manifestData = await manifestDataResponse.json();
//       console.log("MANIFEST DATA");
//       console.log(manifestData);
//       const manifestInfo: QromaFirmwareBuildManifestInfo = {
//         sourceUrl: qromaSiteManifest.path,
//         data: manifestData as unknown as QromaFirmwareBuildManifest
//       };
//       return manifestInfo;
//     }

//     return null;
//   }
  
//   const fetchAllManifests = async (): Promise<QromaFirmwareBuildManifestInfo[]> => {
//     const response = await fetch(manifestsUrl);
//     const qromaSiteManifests = await response.json() as QromaSiteManifests;

//     const allManifests = await Promise.all(qromaSiteManifests.manifests.map(fetchManifest));
//     console.log("ALL MANIFESTSx");
//     console.log(allManifests);

//     return allManifests.filter(m => m !== null) as QromaFirmwareBuildManifestInfo[];
//   }

//   useEffect(() => {

//     const loadAllManifests = async () => {
//       const allManifests = await fetchAllManifests();
//       setAllManifests(allManifests);
//     }
    
//     loadAllManifests();
//   }, [manifestsUrl]);

  
//   console.log("ALL MANIFESTS");
//   console.log(allManifests);

//   return <div>
//     All Manifests
//     {
//       allManifests.map(m => (
//         <QromaFirmwareBuildManifestComponent
//           manifestInfo={m}
//           key={m.sourceUrl}
//           />
//       ))
//     }
//   </div>
// }