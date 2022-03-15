
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';
import TextElement from './TextElement';


interface FirstElement extends convert.Element {
  type: 'element';
  name: 'first';
  elements: [TextElement];
}

interface NickElement extends convert.Element {
  type: 'element';
  name: 'nick';
  elements: [TextElement];
}

interface LastElement extends convert.Element {
  type: 'element';
  name: 'last';
  elements: [TextElement];
}

interface NameElement extends convert.Element {
  type: 'element';
  name: 'name';
  attributes: {
    Class: 'NameTriple';
  }
  elements: [
    FirstElement,
    NickElement,
    LastElement
  ]
}


export default NameElement;