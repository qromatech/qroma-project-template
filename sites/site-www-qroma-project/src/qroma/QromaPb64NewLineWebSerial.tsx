// import React, { ReactNode } from "react";
// import { createQromaWebSerial } from "./QromaWebSerialContext";
// import QromaWebSerialConnectionContext from "./QromaWebSerialConnectionContext";


// interface QromaPb64NewLineWebSerialConnectionProps {
//   children?: ReactNode
// }

// export const QromaPb64NewLineWebSerialConnection = <T extends object>(props: QromaPb64NewLineWebSerialConnectionProps) => {

//   const qromaWebSerial = createQromaWebSerial<T>();
//   // const qromaWebSerialContext = React.createContext(qromaWebSerial);

//   return (
//     <QromaWebSerialConnectionContext.Provider value={qromaWebSerial}>
//       {props.children}
//     </QromaWebSerialConnectionContext.Provider>
//   );    
// }
