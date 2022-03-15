
import convert from 'xml-js';

import TextElement from './TextElement';
import LiElement from './LiElement';


interface RecordsElement extends convert.Element {
  type: 'element';
  name: 'records';
  elements: [];
}


export default RecordsElement;
