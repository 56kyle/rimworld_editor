
import convert from 'xml-js';


interface FilthElement extends convert.Element {
  type: 'element';
  name: 'filth';
  elements: [];
}


export default FilthElement;
