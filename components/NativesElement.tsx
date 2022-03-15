
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';
import VerbTrackerElement from './VerbTrackerElement';


interface NativesElement extends convert.Element {
  type: 'element';
  name: 'natives';
  elements: [VerbTrackerElement];
}


export default NativesElement;
