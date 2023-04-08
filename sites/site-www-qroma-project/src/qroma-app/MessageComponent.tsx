// import { Field, Type } from 'protobufjs';
// import React, { useState } from 'react';


// function ProtoForm({ messageType }: {messageType: Type}) {
//   const [formData, setFormData] = useState({});


//   const handleFieldChange = (fieldName, value) => {
//     setFormData({ ...formData, [fieldName]: value });
//   };

//   const handleSubmit = () => {
//     // Send formData to server
//   };

//   const renderField = (field) => {
//     switch (field.type) {
//       case 'string':
//         return (
//           <div key={field.name}>
//             <label>{field.name}</label>
//             <input
//               type="text"
//               value={formData[field.name] || ''}
//               onChange={(e) =>
//                 handleFieldChange(field.name, e.target.value)
//               }
//             />
//           </div>
//         );
//       case 'bool':
//         return (
//           <div key={field.name}>
//             <label>{field.name}</label>
//             <input
//               type="checkbox"
//               checked={formData[field.name] || false}
//               onChange={(e) =>
//                 handleFieldChange(field.name, e.target.checked)
//               }
//             />
//           </div>
//         );
//       case 'enum':
//         return (
//           <div key={field.name}>
//             <label>{field.name}</label>
//             <select
//               value={formData[field.name] || ''}
//               onChange={(e) =>
//                 handleFieldChange(field.name, e.target.value)
//               }
//             >
//               {field.resolvedType.values.map((value) => (
//                 <option key={value} value={value}>
//                   {value}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       // Add more cases for other field types as needed
//     }
//   };

//   console.log(messageType.fields);

//   const fields = Object.values(messageType.fields);

//   return (
//     <form onSubmit={handleSubmit}>
//       {fields.map(field => renderField(field))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// // Load the protocol buffer message
// // const root = protobuf.loadSync('path/to/your/protofile.proto');
// // const MyProtoMessage = root.lookupType('MyProtoMessage');


// export default ProtoForm;