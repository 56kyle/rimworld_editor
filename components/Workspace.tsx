

import React, { useState, useEffect, useCallback, Children } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Tab, { TabProps, TabOnClick } from './Tab';
import styles from '../styles/Workspace.module.css';
import AddIcon from '@mui/icons-material/Add';
import convert from 'xml-js';
import { table } from 'console';


type WorkspaceProps = {
  children?: React.ReactNode;
}

const Workspace: React.FC<WorkspaceProps> = ({ children }) => {
  const [tabs, setTabs] = useState<Map<string, TabProps>>(new Map());
  const [focusedTab, setFocusedTab] = useState<TabProps>({name: 'help.txt', onClick: (tab: TabProps) => {}, children: <>This is a help page.</>});

  const genTabKey = () => {
    return (Math.random() * 100000).toString();
  }

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
  const {getRootProps, getInputProps, open} = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true
  })

  const addTab: TabOnClick = useCallback((tab: TabProps) => {
    /* TODO - Refactor the TabOnClick interface and/or TabProps type so that this can have default values */
    console.log('addTab', tab);
    tab.tabKey = tab.tabKey ? tab.tabKey : genTabKey()
    tab.name = tab.name ? tab.name : 'untitled.txt';
    tab.onClick = focusTab;
    tab.children = <div>This is a test</div>
    let newTabs: Map<string, TabProps> = new Map(tabs);
    newTabs.set(tab.tabKey, tab);
    setTabs(newTabs);
  }, [tabs]);

  const focusTab: TabOnClick = (tab: TabProps) => {
    console.log('focusTab');
    console.dir(tab);
    setFocusedTab(tab);
  }

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
