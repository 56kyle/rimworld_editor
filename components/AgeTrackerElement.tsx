
import convert from 'xml-js';

import TextElement from './TextElement';


interface AgeBiologicalTicksElement extends convert.Element {
  type: 'element';
  name: 'ageBiologicalTicks';
  elements: [TextElement];
}

interface BirthAbsTicksElement extends convert.Element {
  type: 'element';
  name: 'birthAbsTicks';
  elements: [TextElement];
}

interface GrowthElement extends convert.Element {
  type: 'element';
  name: 'growth';
  elements: [TextElement];
}

interface NextGrowthCheckTickElement extends convert.Element {
  type: 'element';
  name: 'nextGrowthCheckTick';
  elements: [TextElement];
}

interface AgeReversalDemandedAtAgeTicksElement extends convert.Element {
  type: 'element';
  name: 'ageReversalDemandedAtAgeTicks';
  elements: [TextElement];
}

interface AgeTrackerElement extends convert.Element {
  type: 'element';
  name: 'ageTracker';
  elements: [AgeBiologicalTicksElement, BirthAbsTicksElement, GrowthElement, NextGrowthCheckTickElement, AgeReversalDemandedAtAgeTicksElement];
}


export default AgeTrackerElement;
