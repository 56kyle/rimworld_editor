
import { on } from 'events';
import React, { useState, useEffect, useCallback, Children } from 'react';
import styles from '../styles/Tab.module.css';


type TabProps = {
  name?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}


const Tab: React.FC<TabProps> = ({ name, onClick, children }) => {
  return (
    <button className={styles.tab} onClick={onClick}>
    </button>
  );
}


export default Tab;
export type {TabProps};

