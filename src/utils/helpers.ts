export const geometricAverage: (arg: number[]) => number = (arg) => {
  const base = arg.reduce((acc, curr) => acc * curr);
  return base ** (1 / arg.length);
};

export const random: (min: number, max: number) => number = (min, max) =>
  Math.floor(min + Math.random() * (max - min + 1));

export const sum = (arr) => arr.reduce((acc, curr) => acc + curr);

export const average = (...args) =>
  +(args.reduce((acc, curr) => acc + curr) / args.length).toFixed(2);
