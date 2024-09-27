import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bakon.png';
import {Ingredient} from "./types";
export const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', priceUnit: 80, image: meatImage},
    {name: 'Cheese', priceUnit: 50, image: cheeseImage},
    {name: 'Salad', priceUnit: 10, image: saladImage},
    {name: 'Bacon', priceUnit: 60, image: baconImage},
];