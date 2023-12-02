import React from 'react';
import { QromaPageAppContext } from '../react-qroma-lib/qroma-lib/page-app/QromaPageAppContext';
import { _createQromaPageApp } from '../react-qroma-lib/qroma-lib/page-app/QromaPageApp';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

console.log("IN ROOT OF APP")


export const Root = ({children}) => {

  const qromaPageApp = ExecutionEnvironment.canUseDOM ? _createQromaPageApp() : undefined;
  
  return (
    <BrowserOnly>
      <QromaPageAppContext.Provider value={qromaPageApp}>
        {children}
      </QromaPageAppContext.Provider>
    </BrowserOnly>
  )
}

export default Root;