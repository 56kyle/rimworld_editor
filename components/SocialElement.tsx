
import convert from 'xml-js';


interface SocialElement extends convert.Element {
  type: 'element';
  name: 'social';
  elements: [];
}


export default SocialElement;
