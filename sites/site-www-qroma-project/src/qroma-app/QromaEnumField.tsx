// import { EnumInfo, FieldInfo, ScalarType } from "@protobuf-ts/runtime"
// import React from "react"


// interface IQromaEnumFieldProps {
//   field: FieldInfo
//   enumInfo: EnumInfo
// }

// interface EnumValue {
//   strValue: string
//   numValue: number | string
// }

// export const QromaEnumField = (props: IQromaEnumFieldProps) => {
//   const field = props.field;
//   const [enumName, enumObject] = props.enumInfo;

//   const enumValues: EnumValue[] = []
//   for (const [key, value] of Object.entries(enumObject)) {
//     if (typeof value !== 'number') {
//       continue;
//     }
    
//     enumValues.push(
//       {
//         strValue: key,
//         numValue: value,
//       }
//     );
//     // console.log("name");
//     // console.log(key);
//     // console.log("PROTO");
//     // console.log(value);
//   }

//   return (
//     <div>
//       Qroma Enum Field
//       <ul>
//         <li>{field.name} [{enumName}]</li>
//         <ul>
//           {
//             enumValues.map(v => (
//               <li key={v.strValue}>
//                 {v.strValue} [{v.numValue}]
//               </li>
//             ))
//           }
//         </ul>
//       </ul>
//     </div>
//   )
// }