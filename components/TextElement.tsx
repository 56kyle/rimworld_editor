import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';



interface TextElement extends convert.Element {
  type: 'text';
  text: string;
}


export default TextElement;
