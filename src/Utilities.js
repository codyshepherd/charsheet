
const saveCharacter = (charName, state) => {
  localStorage.setItem(charName, JSON.stringify(state));
};

const loadCharacter = (charName) => {
  return JSON.parse(localStorage.getItem(charName));
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const rollDie = (faces, numRolls) => {
  let result = 0;
  for (let i = 0; i < numRolls; i++) { result += getRandomInt(faces)+1; }
  return result;
};

export { loadCharacter, saveCharacter, rollDie }
