
import { on } from 'events';
import React, { useState, useEffect, useCallback, Children } from 'react';
import styles from '../styles/Tab.module.css';


interface TabOnClick { (tab: TabProps): any}

type TabProps = {
  name?: string;
  onClick: TabOnClick;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}


const Tab: React.FC<TabProps> = ({ name, onClick, icon, children }) => {
  const onClickHandler = (event: React.MouseEvent) => {
    onClick({name, onClick, icon, children});
  }
  return (
    <button className={styles.tab} onClick={onClickHandler}>
      <span className={styles.name}>{name ? `"${name}"` : ''}</span>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}


export default Tab;
export type {TabProps, TabOnClick};

