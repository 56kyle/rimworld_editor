
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';
import TextElement from './TextElement';


interface CurJobElement extends convert.Element {
  type: 'element';
  name: 'curJob';
  attributes: {
    isNull: string;
  }
  elements: [];
}

interface CurDriverElement extends convert.Element {
  type: 'element';
  name: 'curDriver';
  attributes: {
    isNull: string;
  }
  elements: [];
}

interface JobQueueElement extends convert.Element {
  type: 'element';
  name: 'jobQueue';
  elements: [];
}

interface FormingCaravanTickElement extends convert.Element {
  type: 'element';
  name: 'formingCaravanTick';
  elements: [TextElement];
}

interface JobsElement extends convert.Element {
  type: 'element';
  name: 'jobs';
  elements: [
    CurJobElement,
    CurDriverElement,
    JobQueueElement,
    FormingCaravanTickElement
  ]
}


export default JobsElement;
