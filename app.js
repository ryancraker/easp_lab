// SECTION data set
let bank = 100;
const players = [
  { teamNumber: 1, emoji: "🏃‍♂️", skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: "🤾‍♂️", skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: "🏇", skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: "🏌️‍♀️", skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: "🏋️‍♂️", skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: "🏌️‍♂️", skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: "🤾", skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: "🏂", skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: "🧘‍♀️", skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: "🚶‍♀️", skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: "🏋️‍♀️", skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: "🤺", skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: "🏄", skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: "🧜‍♂️", skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: "🤸", skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: "⛹️‍♀️", skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: "🕴️", skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: "💃", skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: "🧍‍♂️", skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: "🐅", skill: 100, name: "Tiger" },
];
// !SECTION

function drawTeams(team) {
  const teamElem = document.getElementById(team);
  let teamContent = '';
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == team) {
      teamContent += player.emoji;
      console.log(player.emoji)
    }
  }
  teamElem.innerText = teamContent;
  console.log('Teams Drafted')
}

function balanceChange() {
  const bankElem = document.getElementById('balance');
  bankElem.innerText = `$${bank}`
}


function randomTeams() {
  const team = [1, 2];
  const randomTeam = Math.floor(Math.random() * team.length);
  return team[randomTeam]
}

function shuffleTeams() {
  console.log('Teams Shuffling....');
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const team = randomTeams();
    player.teamNumber = team
  };
  drawTeams(1);
  drawTeams(2);
  console.log("Teams Drafted");
}



function betTeam(teamNumber, betAmount) {
  let homeTeam = 0
  let awayTeam = 0

  players.forEach(player => {
    if (player.teamNumber == teamNumber) {
      homeTeam += player.skill
    }
    else {
      awayTeam += player.skill
    }
  })

  if (homeTeam > awayTeam) {
    bank += betAmount
  }
  else if (awayTeam > homeTeam) {
    bank -= betAmount
  }

  blowout()
  balanceChange()
  console.log(homeTeam);
  console.log(awayTeam);
  console.log(bank);
  shuffleTeams()
}

function blowout() {
  if (bank > 0) {
    return
  };
  const goAgain = window.confirm("OH NO! You totally beefed it on the bet. Try Again?")

  if (goAgain == true) {
    bank = 100;
  }
  else {
    window.close()
  }
}

drawTeams(1);
drawTeams(2);
// function betTeam1() {
//   let team1Skill = 0
//   let team2Skill = 0
//   players.forEach(player); {
//     if (player.teamNumber == 1) {
//       team1Skill += player.skill
//     }
//     else {
//       team2Skill += player.skill
//     }
//   }
//   if (team1Skill > team2Skill) {
//     bank += 25;
//     window.alert("You won $25 😁")
//   };
//   if (team1Skill < team2Skill) {
//     bank -= 25;
//     window.alert("You lost $25😢");
//   };
//   balanceChange();
//   console.log(team1Skill);
//   console.log(team2Skill);
//   console.log(bank);
//   shuffleTeams();
//   return bank
// };

// function betTeam2() {
//   let team1Skill = 0;
//   let team2Skill = 0;
//   players.forEach((player) => {
//     if (player.teamNumber == 2) {
//       team2Skill += player.skill
//     };
//     if (player.teamNumber == 1) {
//       team1Skill += player.skill
//     }
//   });
//   if (team1Skill < team2Skill) {
//     bank += 25;
//     alert('You won $25😁')
//   }
//   if (team1Skill > team2Skill) {
//     bank -= 25;
//     blowout(bank)
//     alert('You lost $25😢');
//   };
//   balanceChange();
//   console.log(team1Skill);
//   console.log(team2Skill);
//   console.log(bank);
//   shuffleTeams();
//   return bank
// }



// SECTION functional code that is refactored into the func drawTeams()
// drawTeam1()
// drawTeam2()
// function drawTeam1() {
//   const team1Elem = document.getElementById("1");
//   let team1Content = "";
//   for (let i = 0; i < players.length; i++) {
//     const player = players[i];
//     if (player.teamNumber == 1) {
//       team1Content += player.emoji;
//       console.log(player.emoji);
//     }
//   }
//   team1Elem.innerText = team1Content
//   console.log("Team one drafted");
// }

// function drawTeam2() {
//   const team2Elem = document.getElementById("2");
//   let team2Content = "";
//   for (let i = 0; i < players.length; i++) {
//     const player = players[i];
//     if (player.teamNumber == 2) {
//       team2Content += player.emoji;
//       console.log(player.emoji);
//     }
//   }
//   team2Elem.innerText = team2Content
//   console.log("Team two drafted");
// }
// !SECTION