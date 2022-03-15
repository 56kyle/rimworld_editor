
import convert from 'xml-js';

import InnerListElement from './InnerListElement';
import TextElement from './TextElement';


interface EquipmentElement extends convert.Element {
  type: 'element';
  name: 'equipment';
  elements: [];
}


export default EquipmentElement;
