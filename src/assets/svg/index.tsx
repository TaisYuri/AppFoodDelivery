import React from 'react';

import Pizza from './Pizza.svg';
import Pizza4 from './Pizza4.svg';
import Pizza3 from './Pizza3.svg';
import Hamburger from './Hamburger.svg';
import Hotdog1 from './Hotdog1.svg';
import Scorpion from './Scorpion.svg';
import Sushi from './Sushi.svg';
import Fire from './Fire.svg';
import PlusMath from './PlusMath.svg';
import IconMoney from './IconMoney.svg';
import Ellipse from './Ellipse.svg';
import Subtract from './Subtract.svg';
import Star from './Star.svg';
import Time from './Time.svg';


import { ISvgSelector } from './types';


const icons = {
  pizza: Pizza,
  pizza4: Pizza4,
  pizza3: Pizza3,
  hamburger: Hamburger,
  hotdog1: Hotdog1,
  scorpion: Scorpion,
  sushi: Sushi,
  fire: Fire,
  plusMath: PlusMath,
  iconMoney: IconMoney,
  ellipse: Ellipse,
  subtract: Subtract,
  star: Star,
  time: Time,
 
};

export function SvgSelector({ name, ...props }: ISvgSelector) {
  const Icon = name ? icons[name] : icons.pizza3;

  return <Icon {...props} />;
}
