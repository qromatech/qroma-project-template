import React from "react"

interface ITestHookViewerProps {
  dataStr: string
}


export const TestHookViewer = (props: ITestHookViewerProps) => {
  return (
    <div>
      {props.dataStr}
    </div>
  )
}