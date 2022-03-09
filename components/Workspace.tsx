

import React, { useState, useEffect, useCallback, Children } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Tab, { TabProps } from './Tab';
import styles from '../styles/Workspace.module.css';
import AddIcon from '@mui/icons-material/Add';
import convert from 'xml-js';


type WorkspaceProps = {
  children?: React.ReactNode;
}

const Workspace: React.FC<WorkspaceProps> = ({ children }) => {
  const [tabs, setTabs] = useState<TabProps[]>([

  ]);
  const [focusedTab, setFocusedTab] = useState<TabProps>({});

  const onDrop = useCallback((acceptedFiles) => {
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
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const focusTab = useCallback((tab: TabProps) => {
  }, [])

  const addTab = useCallback((tab: TabProps) => {
  }, [])


  return (
    <>
      <nav className={styles.nav}>
      </nav>
      <div className={styles.main}>
        This is the workspace main
        
        {children}
      </div>
    </>
  );
}

export default Workspace;
