function gameWinners(gryffindor, slytherin) {

  const yesSnitch = 150;
  const noSnitch = 0;

  if (gryffindor[1] == 'yes') {
    gryffindor[1] = yesSnitch;
  } else {
    gryffindor[1] = noSnitch;
  }

  if (slytherin[1] == 'yes') {
    slytherin[1] = yesSnitch;
  } else {
    slytherin[1] = noSnitch;
  }
  
  function totalPoints(team) {
    return team[0] + team[1];
  }

  let totalGryffindor = totalPoints(gryffindor);
  let totalSlytherin = totalPoints(slytherin);

  if (totalGryffindor > totalSlytherin) {
    return 'Gryffindor wins!';
  } else if (totalGryffindor < totalSlytherin) {
    return 'Slytherin wins!';
  } else if (totalGryffindor === totalSlytherin) {
    return 'It\'s a draw';
  }
    //who has won the game?
};

gameWinners([250, 'no'], [100, 'yes']);