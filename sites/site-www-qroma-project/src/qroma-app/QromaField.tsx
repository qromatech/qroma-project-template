// import { FieldInfo } from "@protobuf-ts/runtime"
// import React from "react"
// import { QromaScalarField } from "./QromaScalarField";
// import { QromaEnumField } from "./QromaEnumField";


// interface IQromaFieldProps {
//   field: FieldInfo
// }

// export const QromaField = (props: IQromaFieldProps) => {
//   const field = props.field;
  
//   if (field.kind === 'scalar') {
//     const scalarField = field;
//     const scalarT = scalarField.T;

//     return (
//       <QromaScalarField
//         field={field}
//         scalarType={scalarT}
//         />
//     )
//   }

//   if (field.kind === 'enum') {
//     const enumField = field;
//     const enumInfo = enumField.T();

//     return (
//       <QromaEnumField
//         field={field}
//         enumInfo={enumInfo}
//         />
//     )
//   }

//   return (
//     <div>
//       Qroma Field
//       <ul>
//         <li>{field.name}</li>
//         <li>{field.kind}</li>
//         <li>{field.no}</li>
//       </ul>
//     </div>
//   )
// }