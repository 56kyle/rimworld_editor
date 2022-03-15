
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import TextElement from './TextElement';

interface LoadIdElement extends convert.Element {
  type: 'element';
  name: 'loadId';
  elements: [TextElement];
}

interface 



interface Verb extends convert.Element {

}