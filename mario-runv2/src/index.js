// Organização dos dados em constantes
const CHARACTERS = {
  MARIO: {
    NAME: 'Mario',
    SPEED: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0
  },
  LUIGI: {
    NAME: 'Luigi',
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0
  },
  BOWSER: {
    NAME: 'Bowser',
    SPEED: 5,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0
  },
  PEACH: {
    NAME: 'Peach',
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 2,
    POINTS: 0
  },
  YOSHI: {
    NAME: 'Yoshi',
    SPEED: 2,
    MANEUVERABILITY: 4,
    POWER: 3,
    POINTS: 0
  }
};

// Constantes para os blocos e suas habilidades associadas
const BLOCKS = {
  RETA: 'SPEED',
  CURVA: 'MANEUVERABILITY',
  CONFRONTO: 'POWER'
};

// Utilitários para cópia profunda e funções básicas
const deepCopy = obj => JSON.parse(JSON.stringify(obj));
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const getRandomBlock = () => {
  const random = Math.random();
  if (random < 0.33) return 'RETA';
  if (random < 0.66) return 'CURVA';
  return 'CONFRONTO';
};

// Funções de exibição
function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

function logRoundStart(round) {
  console.log(`🏁 Rodada ${round}`);
}

function logBlockType(block) {
  console.log(`Bloco ${block}`);
}

function logConfrontation(character1Name, character2Name) {
  console.log(`${character1Name} confrontou com ${character2Name}! 🥊`);
}

function logConfrontationResult(winner, loser) {
  console.log(`${winner} venceu o confronto! ${loser} perdeu 1 ponto 🐢`);
}

function logConfrontationDraw() {
  console.log("Confronto empatado! Nenhum ponto foi perdido");
}

function logPointScored(character) {
  console.log(`${character} marcou um ponto!`);
}

function logRoundSeparator() {
  console.log('------------------------------------------');
}

function logRaceStart(character1, character2) {
  console.log(
    `🏁🚨 Corrida entre ${character1.NAME} e ${character2.NAME} começando...\n`
  );
}

function logFinalResults(character1, character2) {
  console.log('Resultado final:');
  console.log(`${character1.NAME}: ${character1.POINTS} ponto(s)`);
  console.log(`${character2.NAME}: ${character2.POINTS} ponto(s)`);

  if (character1.POINTS > character2.POINTS) {
    console.log(`🎉 ${character1.NAME} venceu a corrida com ${character1.POINTS} pontos!`);
  } else if (character2.POINTS > character1.POINTS) {
    console.log(`🎉 ${character2.NAME} venceu a corrida com ${character2.POINTS} pontos!`);
  } else {
    console.log('🤝 A corrida terminou empatada!');
  }
}

// Lógica principal do jogo
function handleRound(character1, character2, round) {
  logRoundStart(round);
  
  const block = getRandomBlock();
  logBlockType(block);
  
  const skill = BLOCKS[block];
  const diceResult1 = rollDice();
  const diceResult2 = rollDice();
  
  const totalSkill1 = diceResult1 + character1[skill];
  const totalSkill2 = diceResult2 + character2[skill];
  
  logRollResult(character1.NAME, skill, diceResult1, character1[skill]);
  logRollResult(character2.NAME, skill, diceResult2, character2[skill]);
  
  if (block === 'CONFRONTO') {
    logConfrontation(character1.NAME, character2.NAME);
    
    if (totalSkill1 > totalSkill2 && character2.POINTS > 0) {
      logConfrontationResult(character1.NAME, character2.NAME);
      character2.POINTS--;
    } else if (totalSkill2 > totalSkill1 && character1.POINTS > 0) {
      logConfrontationResult(character2.NAME, character1.NAME);
      character1.POINTS--;
    } else {
      logConfrontationDraw();
    }
  }
  
  // Marcação de pontos regular
  if (totalSkill1 > totalSkill2) {
    logPointScored(character1.NAME);
    character1.POINTS++;
  } else if (totalSkill2 > totalSkill1) {
    logPointScored(character2.NAME);
    character2.POINTS++;
  }
  
  logRoundSeparator();
  
  return { character1, character2 };
}

function playRace(character1, character2, rounds = 5) {
  let player1 = deepCopy(character1);
  let player2 = deepCopy(character2);
  
  logRaceStart(player1, player2);
  
  // Executar as rodadas
  for (let round = 1; round <= rounds; round++) {
    const result = handleRound(player1, player2, round);
    player1 = result.character1;
    player2 = result.character2;
  }
  
  logFinalResults(player1, player2);
  
  return { player1, player2 };
}

// Função principal
function main() {
  playRace(CHARACTERS.MARIO, CHARACTERS.LUIGI);
}

main();