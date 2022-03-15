import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';
import TextElement from './TextElement';



interface IdElement extends convert.Element {
  type: 'element';
  name: 'id';
  elements: [TextElement];
}


export default IdElement;

