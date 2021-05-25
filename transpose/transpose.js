//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (input.length == 0) {
    return [];
  }
  let output = [];
  var i, j;
  let longeststrindex = 0;
  for (i = 0; i < input.length; i++) {
    if (input[i].length >= input[longeststrindex].length) {
      longeststrindex = i;
    }
  }
  for (i = 0; i < input.length; i++) {
    let padto = input[i].length;
    for (j = 0; j < (input[longeststrindex].length - padto); j++) {
      input[i] = input[i].concat(' ');
    }
  }
  for (i in input[0]) {
    output.push('');
  }
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
      output[j] = output[j].concat(input[i][j]);
    }
  }
  output[output.length - 1] = output[output.length - 1].replace(/\s*$/, "");
  return output;
};
