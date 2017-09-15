import { quantGlitch } from 'glitchlib';

import { QUANTIZE_GLITCH } from 'glitch/types';

export function evalGlitchStack(jpeg, stack) {
  if (!jpeg) {
    return jpeg;
  }

  return stack.reduce((img, glitch) => {
    switch (glitch.type) {
      case QUANTIZE_GLITCH:
        return quantGlitch(img, {
          depth: glitch.depth,
          seed: glitch.seed,
          quantTable: glitch.quantTable,
        });
      default:
        return img;
    }
  }, jpeg);
}
