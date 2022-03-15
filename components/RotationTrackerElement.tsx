
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';


interface RotationTrackerElement extends convert.Element {
  type: 'element';
  name: 'rotationTracker';
  elements: [];
}


export default RotationTrackerElement;
