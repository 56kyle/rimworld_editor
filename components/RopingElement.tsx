
import convert from 'xml-js';


interface RopingElement extends convert.Element {
  type: 'element';
  name: 'roping';
  elements: [];
}


export default RopingElement;
