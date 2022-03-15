
import React, { useState, useEffect, useCallback, Children } from 'react';
import convert from 'xml-js';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


enum Action {
  Firefight,
  Patient,
  Doctor,
  BedRest,
  Basic,
  Warden,
  Handle,
  Cook,
  Hunt,
  Construct,
  Grow,
  Mine,
  PlantCut,
  Smith,
  Tailor,
  Art,
  Craft,
  Haul,
  Clean,
  Research
}

enum Skill {
  Shooting,
  Melee,
  Construction,
  Mining,
  Cooking,
  Plants,
  Animals,
  Crafting,
  Artistic,
  Medical,
  Social,
  Intellectual
}

enum Trait {
  Abrasive,
  AnnoyingVoice,
  Ascetic,
  Asexual,
  Beautiful,
  Bisexual,
  Bloodlust,
  BodyModder,
  BodyPurist,
  Brawler,
  Cannibal,
  CarefulShooter,
  ChemicalFascination,
  ChemicalInterest,
  CreepyBreathing,
  Depressive,
  FastLearner,
  FastWalker,
  Gay,
  Gourmand,
  GreatMemory,
  Greedy,
  HardWorker,
  Industrious,
  IronWilled,
  Jealous,
  Jogger,
  Kind,
  Lazy,
  Masochist,
  Misandrist,
  Misogynist,
  Nervous,
  Neurotic,
  NightOwl,
  Nimble,
  Nudist,
  Optimist,
  Pessimist,
  Pretty,
  PsychicallyDeaf,
  PsychicallyDull,
  PsychicallyHyperSensitive,
  PsychicallySensitive,
  Psycopath,
  Pyromaniac,
  QuickSleeper,
  Sanguine,
  Sickly,
  Slothful,
  SlowLearner,
  Slowpoke,
  StaggeringlyUgly,
  Steadfast,
  SuperImmune,
  Teetotaler,
  TooSmart,
  TorturedArtist,
  Tough,
  TriggerHappy,
  Ugly,
  Undergrounder,
  VeryNeurotic,
  Volatile,
  Wimp,
}


interface Name {
  first: string;
  nick: string;
  last: string;
}


interface PawnData {
  def: string;
  faction: string;
  kindDef: string;
  name: Name;
  equipment: any;
  skills: any;
  abilities: any;
  ideo: any;
}


interface PawnProps {
  data: PawnData;
  children?: React.ReactNode;
}


const Pawn: React.FC<PawnProps> = ({data, children}: PawnProps) => {
  const [skills, setSkills] = useState<Skill[]>();
  const [traits, setTraits] = useState<Trait[]>();
  const [incapabilities, setIncapabilities] = useState<Action[]>();
  console.dir(data);

  const [name, setName] = useState<Name>(data['name']);

  const fromData = (data: PawnData) => {
    console.dir(data);
  }

  return (
    <>
    </>
  );
}



