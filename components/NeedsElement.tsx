
import convert from 'xml-js';


interface NeedsElement extends convert.Element {
  type: 'element';
  name: 'needs';
  elements: [];
}


export default NeedsElement;
