
import convert from 'xml-js';


interface GuestElement extends convert.Element {
  type: 'element';
  name: 'guest';
  elements: [];
}


export default GuestElement;
