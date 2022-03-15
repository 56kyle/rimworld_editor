import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';
import TextElement from './TextElement';



interface DefElement extends convert.Element {
  type: 'element';
  name: 'def';
  elements: [TextElement];
}


export default DefElement;

