import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';


interface CurrMeleeVerbElement extends convert.Element {
  type: 'element';
  name: 'currMeleeVerb';
  elements: [TextElement];
}

interface TerrainVerbsElement extends convert.Element {
  type: 'element';
  name: 'terrainVerbs';
  attributes: {
    isNull: string;
  }
  elements: [];
}

interface MeleeVerbsElement extends convert.Element {
  type: 'element';
  name: 'meleeVerbs';
  elements: [
    CurrMeleeVerbElement,
    TerrainVerbsElement
  ]

}


export default MeleeVerbsElement;
