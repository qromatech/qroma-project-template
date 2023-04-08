import React, { useEffect, useState } from "react";
import { QromaSiteProtoFileDetails } from "./models/QromaSiteManifests";
import protobuf, { Field, Message, ReflectionObject, Root, Type } from "protobufjs";
import { QromaProtoField, QromaSiteIo, QromaSiteRequest, QromaSiteResponse, QromaSiteUpdate } from "./models/QromaSiteIo";
import { QromaSiteIoComponent } from "./QromaSiteIoComponent";


export const ProtofileDetailsComponent = ({protofileDetails}: {protofileDetails: QromaSiteProtoFileDetails}) => {

  
  const fetchProtoFile = async (protoFileDetails: QromaSiteProtoFileDetails): Promise<string> => {
    const protofileContentsResponse = await fetch(protoFileDetails.protoPath);
    const protofileText = await protofileContentsResponse.text();
    return protofileText;
  }

  // const fetchAllProtofilesForManifest = async (qfbManifest: QromaFirmwareBuildManifest): Promise<string[]> => {
  //   const manifestProtofileContents = await Promise.all(qfbManifest.protoDetails.protofileDetails.map(fetchProtoFile));
  //   // manifestProtofiles.forEach(f => {
  //   //   console.log("FETCH PROTOFILE: " + f);
  //   //   const protofileContents = await fetch(f);
  //   //   console.log(protofileContents);
  //   // })
  //   return manifestProtofileContents;
  // }

  const [protofileContents, setProtofileContents] = useState("");

  const convertToProtoField = (field: Field): QromaProtoField => {
    return {
      name: field.name,
      type: field.type
    };
  }

  const convertToQromaSiteRequest = (obj: ReflectionObject): QromaSiteRequest => {
    // console.log("PRE-RESOLVE");
    // console.log(proto);
    // // proto.resolve();
    // console.log("POST-RESOLVE");
    // console.log(proto);


    // const protoFields = proto.fields.
    const pbjsType = obj as unknown as Type;
    // pbjsType.fields
    return {
      pbjsType,
    };
  }

  const convertToQromaSiteResponse = (proto: ReflectionObject): QromaSiteResponse => {
    const pbjsType = proto as unknown as Type;
    return {
      pbjsType,
    };
  }

  const convertToQromaSiteUpdate = (proto: ReflectionObject): QromaSiteUpdate => {
    const pbjsType = proto as unknown as Type;
    return {
      pbjsType,
    };
  }


  const getQromaSiteIo = (nested:  { [k: string]: ReflectionObject }): QromaSiteIo => {
    const requests: QromaSiteRequest[] = [];
    const responses: QromaSiteResponse[] = [];
    const updates: QromaSiteUpdate[] = [];

    for (const [key, proto] of Object.entries(nested)) {
      if (key.endsWith("Request") && 
          'fields' in proto)
      {
        const response = convertToQromaSiteRequest(proto);
        requests.push(response);
        console.log("Request: " + proto.name);
      }

      if (key.endsWith("Response") &&
          'fields' in proto)
      {
        const response = convertToQromaSiteResponse(proto);
        responses.push(response);
        console.log("RESPONSE: " + proto.name);
      }

      if (key.endsWith("Update") &&
          'fields' in proto)
      {
        const response = convertToQromaSiteUpdate(proto);
        updates.push(response);
        console.log("Update: " + proto.name);
      }
    }

    return {
      requests,
      responses,
      updates,
    };
  }

  const [qromaSiteIo, setQromaSiteIo] = useState(undefined as QromaSiteIo | undefined);
  

  useEffect(() => {

    const loadProtofileContents = async () => {
      const protofileText = await fetchProtoFile(protofileDetails);
      setProtofileContents(protofileText);

      console.log(protofileText);
      var root = protobuf.parse(protofileText, { keepCase: true }).root; // or use Root#load
      // console.log(proto);
      root.resolveAll();
      console.log("ROOT RESOLVED");
      console.log(root.nested);
      // console.log(root.toJSON());
      if (root.nested === undefined) return;


      const qromaSiteIo = getQromaSiteIo(root.nested);
      console.log("QROMA SITE IO");
      console.log(qromaSiteIo);

      setQromaSiteIo(qromaSiteIo);

      // for (const [key, value] of Object.entries(root.nested)) {
      //   getResponseProtos(key, value);
      // }
    }

    loadProtofileContents();
  }, []);

  
  
  // const proto = "syntax=\"proto3\";\
  // message MyMessage {\
  //   string some_field = 1;\
  // }";

  // protobuf.load("/qroma/versions/0.1.0/proto/hello-qroma.proto");




  return <div>
    ProtofileDetails: {protofileDetails.protoPath}
    {qromaSiteIo ? 
      <QromaSiteIoComponent 
        qromaSiteIo={qromaSiteIo}
        /> :
      undefined
      }
    {/* Content: {protofileContents} */}
  </div>
}