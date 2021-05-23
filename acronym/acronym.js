//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (input) => 
  input
    .toUpperCase()
    .match(/[A-Z']*/g)
    .map(world => world[0])
    .join('');
   