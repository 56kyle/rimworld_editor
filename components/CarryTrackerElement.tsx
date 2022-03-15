import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';

interface MaxStacksElement extends convert.Element {
  type: 'element';
  name: 'maxStacks';
  elements: [TextElement];
}

interface InnerListElement extends convert.Element {
  type: 'element';
  name: 'innerList';
  elements: [];
}

interface InnerContainerElement extends convert.Element {
  type: 'element';
  name: 'innerContainer';
  elements: [MaxStacksElement, InnerListElement];
}

interface CarryTrackerElement extends convert.Element {
  type: 'element';
  name: 'carryTracker';
  elements: [InnerContainerElement];
}


export default CarryTrackerElement;
