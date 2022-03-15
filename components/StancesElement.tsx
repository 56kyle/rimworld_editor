
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';


interface StaggerUntilTickElement extends convert.Element {
  type: 'element';
  name: 'staggerUntilTick';
  elements: [TextElement];
}

interface StunnerElement extends convert.Element {
  type: 'element';
  name: 'Stunner';
  elements: [
    {
      type: 'element';
      name: 'showStunMote';
      elements: [TextElement];
    }
  ]
}

interface CurStanceElement extends convert.Element {
  type: 'element';
  name: 'curStance';
  attributes: {
    Class: string;
  }
  elements: []
}

interface StancesElement extends convert.Element {
  type: 'element';
  name: 'stances';
  elements: [
    StaggerUntilTickElement,
    StunnerElement,
    CurStanceElement,
  ]
}


export default StancesElement;


