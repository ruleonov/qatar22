function updateTable(group){
    console.log(group[0].team);
  }
  
  let testTeamCode = '';
  let testTeamPlace = document.querySelector('table.group-a');
  const chartGroupA = document.createElement('tbody');
  
  testTeamCode = '<tr class="first-place"><th scope="row">1</th><td><img src="img\\flags\\qa.png" width="30px" alt=""></td><td>Qatar</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>';
  
  chartGroupA.innerHTML = testTeamCode;
  
  testTeamPlace.appendChild(chartGroupA);
  
  let firstPlace = document.querySelectorAll('tr.first-place');

  // Rearrange teams according to positions
function rearrangeTeams(group){
  const testVar = {}
  testVar[group[0].team] = group[0].position;
  testVar[group[1].team] = group[1].position;
  testVar[group[2].team] = group[2].position;
  testVar[group[3].team] = group[3].position;

  console.log(testVar);

  // let groupPositions = [];
  // for(let i = 0; i < group.length; i++){
  //   groupPositions.push([group[i].team, group[i].position]);
  // }
  // console.log(groupPositions);
  // groupPositions.sort((a, b) => a - b);
  // console.log(groupPositions);
}

rearrangeTeams(groupA);



  // for(let i = 0; i < group.length; i++){
  //   if (group[i].position == 1){
  //     createRow(group, i);
  //   }   
  // }

  // for(let i = 0; i < group.length; i++){
  //   if (group[i].position == 2){
  //     createRow(group, i);
  //   }   
  // }

  // for(let i = 0; i < group.length; i++){
  //   if (group[i].position == 3){
  //     createRow(group, i);
  //   }   
  // }

  // for(let i = 0; i < group.length; i++){
  //   if (group[i].position == 4){
  //     createRow(group, i);
  //   }   
  // }