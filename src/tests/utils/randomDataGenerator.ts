export const generateRandomString = (): string =>
  Math.random().toString(32).replace("0.", "");

export const generateRandomNumber = (): number =>
  Number(Math.random().toString());

export const generateRandomBoolean = (): boolean => Math.random() < 0.5;
