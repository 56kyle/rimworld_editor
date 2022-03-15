
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';
import TextElement from './TextElement';

interface MeleeThreatElement extends convert.Element {
  type: 'element';
  name: 'meleeThreat';
  elements: [TextElement];
}

interface EnemyTargetElement extends convert.Element {
  name: 'enemyTarget';
  elements: [TextElement];
}

interface KnownExploderElement extends convert.Element {
  type: 'element';
  name: 'knownExploder';
  elements: [TextElement];
}

interface LastMannedThingElement extends convert.Element {
  type: 'element';
  name: 'lastMannedThing';
  elements: [TextElement];
}



interface LastAttackedTargetElement extends convert.Element {
  type: 'element';
  name: '';
  elements: [TextElement]
}

interface ThinkDataElement extends convert.Element {
  type: 'element';
  name: '';
  elements: [
    {
      type: 'element';
      name: 'keys';
      elements: Array<TextElement>;
    },
    {
      type: 'element';
      name: 'values';
      elements: Array<TextElement>;
    }
  ]
}

interface LastEngageTargetTickElement extends convert.Element {
  type: 'element';
  name: 'lastEngageTargetTick';
  elements: [TextElement]
}

interface LastAttackTargetTickElement extends convert.Element {
  type: 'element';
  name: 'lastAttackTargetTick';
  elements: [TextElement]
}

interface CanFleeIndividualElement extends convert.Element {
  type: 'element';
  name: 'canFleeIndividual';
  elements: [TextElement]
}

interface LastMeleeThreatHarmTickElement extends convert.Element {
  type: 'element';
  name: 'lastMeleeThreatHarmTick';
  elements: [TextElement]
}

interface NextMoveOrderIsWaitElement extends convert.Element {
  type: 'element';
  name: 'nextMoveOrderIsWait';
  elements: [TextElement]
}

interface DutyElement extends convert.Element {
  type: 'element';
  name: 'duty';
  attributes: {
    isNull: string;
  }
  elements: [TextElement]
} 
interface MentalStateHandlerElement extends convert.Element {
  type: 'element';
  name: 'mentalStateHandler';
  elements: [
    {
      type: 'element';
      name: 'currState';
      attributes: {
        isNull: string;
      }
    }
  ]
}

interface MentalBreakerElement extends convert.Element {
  type: 'element';
  name: 'mentalBreaker';
  elements: Array<convert.Element>
} 

interface InspirationHandlerElement extends convert.Element {
  type: 'element';
  name: 'inspirationHandler';
  attributes: {
    isNull: string;
  }
  elements: []
}

interface PriorityWorkElement extends convert.Element {
  type: 'element';
  name: 'priorityWork';
  elements: [
    {
      type: 'element';
      name: 'prioritizedCell';
      elements: [TextElement];
    }
  ]
}

interface LastSelfTendTickElement extends convert.Element {
  type: 'element';
  name: 'lastSelfTendTick';
  elements: [TextElement]
}

interface BreachingTargetElement extends convert.Element {
  type: 'element';
  name: 'breachingTarget';
  attributes: {
    isNull: string;
  }
  elements: [TextElement]
} 

interface MindStateElement extends convert.Element {
  type: 'element';
  name: 'mindState';
  elements: [
    MeleeThreatElement,
    EnemyTargetElement,
    KnownExploderElement,
    LastMannedThingElement,
    LastAttackedTargetElement,
    ThinkDataElement,
    LastEngageTargetTickElement,
    LastAttackTargetTickElement,
    CanFleeIndividualElement,
    LastMeleeThreatHarmTickElement,
    NextMoveOrderIsWaitElement,
    DutyElement,
    MentalStateHandlerElement,
    MentalBreakerElement,
    InspirationHandlerElement,
    PriorityWorkElement,
    LastSelfTendTickElement,
    BreachingTargetElement
  ];
}

export default MindStateElement;
