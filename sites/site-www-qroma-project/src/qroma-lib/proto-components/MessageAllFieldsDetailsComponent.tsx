import React, { useState } from "react";
import { FieldInfo, MessageInfo } from "@protobuf-ts/runtime";
import { MessageSingleFieldDetailsComponent } from "./MessageSingleFieldDetailsComponent";
import { MessageOneofDetailsComponent } from "./MessageOneofDetailsComponent";


interface OneofGroup {
  oneofFieldName: string
  oneofFields: FieldInfo[]
}

interface IMessageAllFieldsDetailsComponentProps {
  messageTypeName: string
  fields: readonly FieldInfo[]
}


export const MessageAllFieldsDetailsComponent = (props: IMessageAllFieldsDetailsComponentProps) => {

  const fields = props.fields;
  
  const oneofFields = fields.filter(f => f.oneof);
  const oneofMap = new Map<string, FieldInfo[]>();

  for (var f of oneofFields) {
    const oneof = f.oneof!;
    if (oneofMap.has(oneof)) {
      oneofMap.get(oneof)!.push(f)
    } else {
      oneofMap.set(oneof, [f]);
    }
  }

  // console.log("ONEOFs MAP");
  // console.log(oneofMap);
  // console.log(oneofMap.values());

  // const enumName = enumInfo[0];
  // const enumValues = enumInfo[1];
  // const typePrefix = enumInfo[2];

  const oneofGroups = [] as OneofGroup[];
  for (let [k, v] of oneofMap) {
    console.log(k);
    oneofGroups.push({
      oneofFieldName: k,
      oneofFields: v,
    });
  }

  // console.log("ONE OF GROUPS");
  // console.log(oneofGroups);

  const nonOneofFields = fields.filter(f => !f.oneof);


  return (
    <div>
      {/* oneofFields */}
      <ul>
        {
          oneofGroups.map(oog => (
            <MessageOneofDetailsComponent
              oneofName={oog.oneofFieldName}
              fields={oog.oneofFields}
              key={oog.oneofFieldName}
            />
          ))
        }
      </ul>

      {/* nonOneofFields */}
      
      <ul>
        {nonOneofFields.map(f => (
          <MessageSingleFieldDetailsComponent
            field={f}
            key={f.name}
            />
        ))}
      </ul>
    </div>
  )
}
