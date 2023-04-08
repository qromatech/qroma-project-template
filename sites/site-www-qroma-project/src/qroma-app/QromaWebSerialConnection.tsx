// import React, { ReactNode } from "react";
// import { createQromaWebSerial } from "./QromaWebSerialContext";
// import QromaWebSerialConnectionContext from "./QromaWebSerialConnectionContext";


// interface QromaWebSerialConnectionProps {
//   children?: ReactNode
// }

// export const QromaWebSerialConnection = <T extends object>(props: QromaWebSerialConnectionProps) => {

//   const qromaWebSerial = createQromaWebSerial<T>();
//   // const qromaWebSerialContext = React.createContext(qromaWebSerial);

//   return (
//     <QromaWebSerialConnectionContext.Provider value={qromaWebSerial}>
//       {props.children}
//     </QromaWebSerialConnectionContext.Provider>
//   );    
// }
