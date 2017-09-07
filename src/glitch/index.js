import * as glitch from 'glitchlib-js';

export function evalGlitchStack(jpeg, stack) {
  if (!jpeg) {
    return jpeg;
  }
  const newJpeg = glitch.Jpeg.copy(jpeg);

  stack.forEach(s => {
    console.log(s);
    glitch.randomQuantGlitch(newJpeg);
  });

  return newJpeg;
}
