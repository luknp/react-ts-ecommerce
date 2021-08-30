export const countProcentFever = (n1: number, n2: number) => {
  return Math.ceil(((n1 - n2) / n1) * 100);
};
