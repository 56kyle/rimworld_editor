
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';
import styles from '../styles/SaveData.module.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { elementAcceptingRef } from '@mui/utils';


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

const renderSaveDataFromElement = (element: convert.Element) => {
  let newSaveDataKey = genSaveDataKey();
  
  return <SaveData key={newSaveDataKey} saveDataKey={newSaveDataKey} {...element}/>
}

const renderTreeView = ({saveDataKey, declaration, instruction, attributes, cdata, doctype, comment, text, type, name, elements, children}: SaveDataProps) => {
  //console.log('renderTreeView', {saveDataKey, declaration, instruction, attributes, cdata, doctype, comment, text, type, name, elements, children});
  saveDataKey = saveDataKey ? saveDataKey : genSaveDataKey();
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {elements?.map(renderSaveDataFromElement)}
    </TreeView>
  );
}

const renderElement = ({saveDataKey, declaration, instruction, attributes, cdata, doctype, comment, text, type, name, elements, children}: SaveDataProps) => {
  //console.log('renderElement', {saveDataKey, declaration, instruction, attributes, cdata, doctype, comment, text, type, name, elements, children});
  saveDataKey = saveDataKey ? saveDataKey : genSaveDataKey();
  if (type === 'text') {
    return (
      <TreeItem key={saveDataKey} nodeId={saveDataKey} label={name}>
        {text}
      </TreeItem>
    );
  }
  return (
    <TreeItem key={saveDataKey} nodeId={saveDataKey} label={name}>
      {elements?.map(renderSaveDataFromElement)}
    </TreeItem>
  );
}

const SaveData: React.FC<SaveDataProps> = ({saveDataKey, declaration, instruction, attributes, cdata, doctype, comment, text, type, name, elements, children}) => {

  return (
      <>
        {!type ? renderTreeView({
          saveDataKey: saveDataKey,
          declaration: declaration,
          instruction: instruction,
          attributes: attributes,
          cdata: cdata,
          doctype: doctype,
          comment: comment,
          text: text,
          type: type,
          name: name,
          elements: elements,
          children: children}
          ) : renderElement({
            saveDataKey: saveDataKey,
            declaration: declaration,
            instruction: instruction,
            attributes: attributes,
            cdata: cdata,
            doctype: doctype,
            comment: comment,
            text: text,
            type: type,
            name: name,
            elements: elements,
            children: children,
          })}
      </>
    );
  
}


export default SaveData;
export type {SaveDataProps};
export {genSaveDataKey};

