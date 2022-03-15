
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';


interface SaveProps {
  data: any;
  children?: React.ReactNode;
}

const Save: React.FC<SaveProps> = ({ data, children }) => {
  console.dir(data);

  return (
    <>

    </>
  );
}



