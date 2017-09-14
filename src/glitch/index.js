import { Jpeg, quantGlitch } from 'glitchlib';

import { QUANTIZE_GLITCH } from 'glitch/types';

export function evalGlitchStack(jpeg, stack) {
  if (!jpeg) {
    return jpeg;
  }

  return stack.reduce((img, glitch) => {
    let newImg;
    switch (glitch.type) {
      case QUANTIZE_GLITCH:
        newImg = Jpeg.copy(img);
        quantGlitch(newImg, {
          depth: glitch.depth,
          seed: glitch.seed,
          quantTable: glitch.quantTable,
        });
        return newImg;
      default:
        return img;
    }
  }, Jpeg.copy(jpeg));
}
