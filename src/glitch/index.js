import { Jpeg, quantGlitch } from 'glitchlib';

import { QUANTIZE_GLITCH } from 'glitch/types';

export function evalGlitchStack(jpeg, stack) {
  if (!jpeg) {
    return jpeg;
  }
  const newJpeg = Jpeg.copy(jpeg);

  stack.forEach(({ glitch }) => {
    switch (glitch.type) {
      case QUANTIZE_GLITCH:
        quantGlitch(newJpeg, {
          depth: glitch.depth,
          quantTable: glitch.quantTable,
        });
        return;
      default:
        return;
    }
  });

  return newJpeg;
}
