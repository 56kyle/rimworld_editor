
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';


interface LiElement<T> extends convert.Element {
  type: 'element';
  name: 'li';
  elements: Array<T>;
}


export default LiElement;
