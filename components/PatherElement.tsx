
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';


interface MovingElement extends convert.Element {
  type: 'element';
  name: 'moving';
  elements: [TextElement];
}

interface NextCellCostInitialElement extends convert.Element {
  type: 'element';
  name: 'nextCellCostInitial';
  elements: [TextElement];
}

interface PatherElement extends convert.Element {
  type: 'element';
  name: 'pather';
  elements: [MovingElement, NextCellCostInitialElement];
}


export default PatherElement;
