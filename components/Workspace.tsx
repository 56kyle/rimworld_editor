

import React, { useState, useEffect, useCallback, Children } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Tab, { TabProps, TabOnClick } from './Tab';
import styles from '../styles/Workspace.module.css';
import AddIcon from '@mui/icons-material/Add';
import convert from 'xml-js';


type WorkspaceProps = {
  children?: React.ReactNode;
}

const Workspace: React.FC<WorkspaceProps> = ({ children }) => {
  const [tabs, setTabs] = useState<TabProps[]>([]);
  const [focusedTab, setFocusedTab] = useState<TabProps>({name: 'help.txt', onClick: (tab: TabProps) => {}, children: <>This is a help page.</>});

  const onDrop = useCallback(acceptedFiles => {
    console.log('onDrop', acceptedFiles);
    /*
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr);
      }
      reader.readAsArrayBuffer(file)
    })
      */
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const addTab: TabOnClick = useCallback((tab: TabProps) => {
    /* TODO - Refactor the TabOnClick interface and/or TabProps type so that this can have default values */
    if (tab.name === undefined) {
      tab.name = 'untitled.txt';
    }
    if (tab.onClick === undefined) {
      tab.onClick = setFocusedTab;
    }
    setTabs([
      ...tabs,
      tab
    ])
  }, [tabs]);

  return (
    <div {...getRootProps}>
      <input {...getInputProps}/>
      <>
        <nav className={styles.nav}>
          {tabs.map((tab: TabProps) => {
            return (
              <Tab key={(tab.name || '') + Math.random()} name={tab.name} onClick={tab.onClick}>{tab.children}</Tab>
            )
          })}
          <Tab key={'' + Math.random()} name={''} onClick={addTab} icon={<AddIcon/>}>
            {/* TODO - Add a dropdown menu to add a new tab */}
          </Tab>
        </nav>
        <div className={styles.main}>
          {focusedTab.children}
        </div>
      </>
    </div>
  );
}

export default Workspace;
