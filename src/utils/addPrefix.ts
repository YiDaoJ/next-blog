export const addPrefix = (prefix: string, arr: string[]): string => {
  const newArr = arr.map((elm) => `${prefix}:${elm}`);
  return newArr.join(" ");
};
