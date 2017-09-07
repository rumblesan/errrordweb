export const QUANTIZE_GLITCH = 'QUANTIZE_GLITCH';

export function quantizeGlitch(seed, depth, quantTable) {
  return {
    type: QUANTIZE_GLITCH,
    seed,
    depth,
    quantTable,
  };
}
