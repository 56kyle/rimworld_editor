

import convert from 'xml-js';

import DefElement from './DefElement';
import LiElement from './LiElement';
import TextElement from './TextElement';


interface ChildhoodElement extends convert.Element {
  type: 'element';
  name: 'childhood';
  elements: [TextElement];
}

interface AdulthoodElement extends convert.Element {
  type: 'element';
  name: 'adulthood';
  elements: [TextElement];
}

interface BodyTypeElement extends convert.Element {
  type: 'element';
  name: 'bodyType';
  elements: [TextElement];
}

interface CrownTypeElement extends convert.Element {
  type: 'element';
  name: 'crownType';
  elements: [TextElement];
}

interface HeadGraphicPathElement extends convert.Element {
  type: 'element';
  name: 'headGraphicPath';
  elements: [TextElement];
}

interface HairDefElement extends convert.Element {
  type: 'element';
  name: 'hairDef';
  elements: [TextElement];
}

interface HairColorElement extends convert.Element {
  type: 'element';
  name: 'hairColor';
  elements: [TextElement];
}

interface MelaninElement extends convert.Element {
  type: 'element';
  name: 'melanin';
  elements: [TextElement];
}

interface DegreeElement extends convert.Element {
  type: 'element';
  name: 'degree';
  elements: [TextElement];
}

interface TraitObject extends convert.Element {
  def: DefElement;
  degree?: DegreeElement;
}

interface AllTraitsElement extends convert.Element {
  type: 'element';
  name: 'allTraits';
  elements: Array<LiElement<TraitObject>>;
}

interface TraitsElement extends convert.Element {
  type: 'element';
  name: 'traits';
  elements: [AllTraitsElement];
}

interface BirthLastNameElement extends convert.Element {
  type: 'element';
  name: 'birthLastName';
  elements: [TextElement];
}

interface FavoriteColorElement extends convert.Element {
  type: 'element';
  name: 'favoriteColor';
  elements: [TextElement];
}

interface StoryElement extends convert.Element {
  type: 'element';
  name: 'story';
  elements: [
    ChildhoodElement,
    AdulthoodElement,
    BodyTypeElement,
    CrownTypeElement,
    HeadGraphicPathElement,
    HairDefElement,
    HairColorElement,
    MelaninElement,
    TraitsElement,
    BirthLastNameElement,
    FavoriteColorElement
  ];
}


export default StoryElement;
