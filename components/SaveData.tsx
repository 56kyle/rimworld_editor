
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';
import styles from '../styles/SaveData.module.css';

import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlined from '@mui/icons-material/ExpandLessOutlined';


// Language: typescript
// Path: components\SaveData.tsx
// This component is a representation of a piece of data from a Rimworld save file.
// The input is a dictionary of json data that came from a Rimworld save file that was converted from xml to json.
// The component should display the json data in a tree like structure
// The name and attributes should be visible in the tree, but there should be an arrow button to the right of the name to expand the json data and show the children.
// if the type is "text" then the value should be visible in the tree.


interface SaveDataProps extends convert.Element {
  saveDataKey: string;
  children?: React.ReactNode;
}


let objectKeyNum: number = 0
const genSaveDataKey = () => {
  objectKeyNum++;
  return 'saveDataKey' + objectKeyNum.toString()
}

const SaveData: React.FC<SaveDataProps> = ({saveDataKey, declaration, instruction, attributes, cdata, doctype, comment, text, type, name, elements, children}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback((e: React.MouseEvent) => {
    setExpanded(!expanded);
  }, [expanded]);

  const renderChildren = useCallback((element: convert.Element) => {
    console.log('renderChildren', element);
    let newSaveDataKey = genSaveDataKey();
    if (!element) {
      console.log('-----------------')
      return null;
    }
    if (element.type === 'text') {
      return <span key={newSaveDataKey}>{element.text}</span>
    }
    return <SaveData key={newSaveDataKey} saveDataKey={newSaveDataKey} {...element} />
  }, []);

  return (
    <div className={styles.saveData}>
      <div className={styles.headers}>
        <span className={styles.name}>{name}</span>
        {attributes}
        <button className={styles.expandButton} onClick={toggleExpanded}>
          {expanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined/>}
        </button>
      </div>
      {expanded ? elements?.map(renderChildren) : null}
    </div>
  );
}


export default SaveData;
export type {SaveDataProps};
export {genSaveDataKey};

