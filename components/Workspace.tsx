

import React, { useState, useEffect, useCallback, Children } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import convert from 'xml-js';
import { table } from 'console';

import styles from '../styles/Workspace.module.css';
import Tab, { TabProps, TabOnClick } from './Tab';
import SaveData, { SaveDataProps, genSaveDataKey } from './SaveData';


import AddIcon from '@mui/icons-material/Add';


type WorkspaceProps = {
  children?: React.ReactNode;
}

const Workspace: React.FC<WorkspaceProps> = ({ children }) => {
  const [tabs, setTabs] = useState<Map<string, TabProps>>(new Map());
  const [focusedTab, setFocusedTab] = useState<TabProps>({name: 'help.txt', onClick: (tab: TabProps) => {}, children: <>This is a help page.</>});

  const genTabKey = () => {
    return (Math.random() * 100000).toString();
  }

  const focusTab: TabOnClick = useCallback((tab: TabProps) => {
    console.log('focusTab');
    console.dir(tab);
    setFocusedTab(tab);
  }, []);

  const addTab: TabOnClick = useCallback((tab: TabProps) => {
    /* TODO - Refactor the TabOnClick interface and/or TabProps type so that this can have default values */
    console.log('addTab', tab);
    tab.tabKey = tab.tabKey ? tab.tabKey : genTabKey()
    tab.name = tab.name ? tab.name : 'untitled.txt';
    tab.onClick = focusTab;
    let newTabs: Map<string, TabProps> = new Map(tabs);
    newTabs.set(tab.tabKey, tab);
    setTabs(newTabs);
  }, [focusTab, tabs]);

  const onDrop = useCallback(acceptedFiles => {
    console.log('onDrop', acceptedFiles);
    acceptedFiles.forEach((file: File) => {
      let reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        let xmlData: string | ArrayBuffer | null = reader.result
        let jsData: convert.Element | convert.ElementCompact = {}
        if (typeof xmlData === 'string') {
          jsData = convert.xml2js(xmlData, {compact: false, alwaysChildren: true});
          let testData = convert.xml2json(xmlData, {compact: false, alwaysChildren: true, spaces: 4});
          console.log('testData');
          console.log(testData);
          console.log('/testData');
        }
        let newSaveDataKey = genSaveDataKey();


        addTab({name: file.name, onClick: focusTab, children: <SaveData key={newSaveDataKey} saveDataKey={newSaveDataKey} {...jsData}></SaveData>});
      }
      reader.readAsText(file)
    })
  }, [addTab, focusTab])

  const {getRootProps, getInputProps, open} = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()}/>
      <nav className={styles.nav}>
        {Array.from(tabs.values()).map((tab) => {
          return (
            <Tab key={tab.tabKey} name={tab.name} onClick={tab.onClick}>{tab.children}</Tab>
          )
        })}
        <Tab key={genTabKey()} name={''} onClick={addTab} icon={<AddIcon/>}>
          {/* TODO - Add a dropdown menu to add a new tab */}
        </Tab>
      </nav>
      <div className={styles.main}>
        {focusedTab.children}
      </div>
    </div>
  );
}

export default Workspace;
