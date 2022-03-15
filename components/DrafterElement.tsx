

import convert from 'xml-js';


interface AutoUndrafterElement extends convert.Element {
  type: 'element';
  name: 'autoUndrafter';
  elements: [];
}

interface DrafterElement extends convert.Element {
  type: 'element';
  name: 'drafter';
  elements: [AutoUndrafterElement];
}


export default DrafterElement;
