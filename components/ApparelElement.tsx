import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';
import InnerListElement from './InnerListElement';


interface WornApparelElement extends convert.Element {
  type: 'element';
  name: 'wornApparel';
  elements: []
}

interface LockedApparelElement extends convert.Element {
  type: 'element';
  name: 'lockedApparel';
  attributes: {
    isNull: string;
  }
  elements: []
}

interface LastApparelWearoutTickElement extends convert.Element {
  type: 'element';
  name: 'lastApparelWearoutTick';
  elements: [TextElement];
}

interface ApparelElement extends convert.Element {
  type: 'element';
  name: 'apparel';
  elements: [
    WornApparelElement,
    LockedApparelElement,
    LastApparelWearoutTickElement
  ];
}