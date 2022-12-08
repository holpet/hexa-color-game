function getRandomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6).toUpperCase();
}

function getRandomOrder() {
  return Math.floor(Math.random() * 3);
}

function generateColors() {
  return [getRandomColor(), getRandomColor(), getRandomColor()];
}

export { generateColors, getRandomOrder };
