export const getState = (
  delta: string
): undefined | "positive" | "negative" => {
  switch (delta[0]) {
    case "+":
      return "positive";
    case "-":
      return "negative";
    default:
      return undefined;
  }
};
