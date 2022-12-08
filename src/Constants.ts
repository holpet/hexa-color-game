import { generateColors, getRandomOrder } from "./lib/colorGen";

enum Result {
  Correct,
  Wrong,
}

const Init = {
  getColors: generateColors,
  getOrder: getRandomOrder,
  result: undefined,
};

export { Result, Init };
