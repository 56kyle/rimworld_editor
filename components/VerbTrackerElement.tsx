
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';


interface VerbsElement extends convert.Element {
  type: 'element';
  name: 'verbs';
  attributes: {
    isNull: string;
  }
  elements: ;
}

interface VerbTrackerElement extends convert.Element {
  type: 'element';
  name: 'verbTracker';
  elements: [VerbsElement];
}


export default VerbTrackerElement;
