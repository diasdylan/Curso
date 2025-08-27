function salame(a, b) {
    return a + b
}

// console.log(salame(2,2))

//Create teams: 
function createTeams(){
    let teams = []
    let id = 1
    for(let i = 1; i < 6; i++){
        let team = {};
        let teamMates = {};
        team.name = 'Team-'+i;
        for(let j = 1; j < 5; j++ ){
            let personId = 'Person-'+j
            teamMates[personId] = id;;
            team.group = teamMates;
            id++;
        }
        
        teams.push(team)
    }

    return console.log(teams);
}


createTeams()
