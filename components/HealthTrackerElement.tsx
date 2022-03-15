

import convert from 'xml-js';


interface HealthTrackerElement extends convert.Element {
  type: 'element';
  name: 'healthTracker';
  elements: [];
}


export default HealthTrackerElement;
