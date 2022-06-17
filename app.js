const groupA = [{
  flag: "img\\flags\\qa.png",
  team: 'Qatar',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 1
},
{
  flag: "img\\flags\\ec.png",
  team: 'Ecuador',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 2
},
{
  flag: "img\\flags\\sn.png",
  team: 'Senegal',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 3
},
{
  flag: "img\\flags\\nl.png",
  team: 'Netherlands',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 4
}];

const groupB = [{
  flag: "img\\flags\\_England.png",
  team: 'England',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 1
},
{
  flag: "img\\flags\\ir.png",
  team: 'Iran',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 2
},
{
  flag: "img\\flags\\us.png",
  team: 'USA',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 3
},
{
  flag: "img\\flags\\_Wales.png",
  team: 'Wales',
  wins: 0,
  losses: 0,
  goalDiff: 0,
  points: 0,
  position: 4
}];

let teamRow = '';

// Updating team row information
function updateTable(group, n = 0){
  // let n = 0;
  return teamRow = `<tr><th scope="row">${group[n].position}</th><td><img src="${group[n].flag}" width="30px" alt=""></td><td>${group[n].team}</td><td>${group[n].wins}</td><td>${group[n].losses}</td><td>${group[n].goalDiff}</td><td>${group[n].points}</td></tr>`;
}

// Updating team results
function updateTeam(group, n = 0, teamWin, teamLoss, goalsScored, goalsConc, teamPts, teamPos){
  group[n].wins += teamWin;
  group[n].losses += teamLoss;
  group[n].goalDiff += goalsScored-goalsConc;
  group[n].points += teamPts;
  group[n].position = teamPos;

}

//  Creating a group of 4 teams
function createTable(group, groupName){

  // Creating a row with 1 team
  function createRow(group, n){

    // Creating a table inside 'table' tag
    let testTeamPlace = document.querySelector(`table.${groupName}`);
    const chartGroup = document.createElement('tbody');
    chartGroup.innerHTML = updateTable(group, n);
    testTeamPlace.appendChild(chartGroup);
      
  };

// Fill the group according to current position in the DB

  for(let j = 1; j < 5; j++){
    for(let i = 0; i < group.length; i++){
      if (group[i].position == j){
        createRow(group, i);
      }  
    }
  }
}

// Finally putting group info

// testing team update

// updateTeam(groupA, 0, 1, 0, 0, 0, 0, 2);
// updateTeam(groupA, 1, 1, 0, 3, 1, 3, 1);
// updateTeam(groupA, 2, 0, 1, 1, 3, 0, 3);
// updateTeam(groupA, 3, 1, 0, 3, 1, 3, 4);

// updateTeam(groupB, 0, 1, 0, 0, 0, 0, 4);
// updateTeam(groupB, 1, 1, 0, 3, 1, 3, 3);
// updateTeam(groupB, 2, 0, 1, 1, 3, 0, 2);
// updateTeam(groupB, 3, 1, 0, 3, 1, 3, 1);

createTable(groupA, 'group-a');
createTable(groupB, 'group-b');

// Highlighting leaders and relegations



// let firstPlace = document.querySelectorAll('tr.first-place');

// groupA.forEach(element => {
  
// });
  


// Results saved to the server DB

