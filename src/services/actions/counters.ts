export const small = (text: string) => {
  return {
    type: "SMALL",
    payload: text,
  };
};
export const big = (text: string) => {
  return {
    type: "BIG",
    payload: text,
  };
};
