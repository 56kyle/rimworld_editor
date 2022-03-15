
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';

import LiElement from './LiElement';


interface InnerListElement<T> extends convert.Element {
  type: 'element';
  name: 'innerList';
  elements: Array<LiElement<T>>;
}

export default InnerListElement;

