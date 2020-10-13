export const randomInteger = (min: number, max: number): number => {
  let random = min + Math.random() * (max - min);
  return Math.round(random);
};
