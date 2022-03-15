
import convert from 'xml-js';


interface InventoryElement extends convert.Element {
  type: 'element';
  name: 'inventory';
  elements: [];
}


export default InventoryElement;
