
import convert from 'xml-js';


interface GuiltElement extends convert.Element {
  type: 'element';
  name: 'guilt';
  elements: [];
}


export default GuiltElement;
