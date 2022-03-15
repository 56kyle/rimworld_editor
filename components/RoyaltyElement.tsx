
import convert from 'xml-js';


interface RoyaltyElement extends convert.Element {
  type: 'element';
  name: 'royalty';
  elements: [];
}


export default RoyaltyElement;
