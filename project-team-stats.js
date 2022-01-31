/*
Team Stats
We want to create and extract information about your favorite sports team. 
Basketball, soccer, tennis, or water polo, you pick it. It’s your job to 
create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain 
insights from them. For example, you might want to get the total number of 
games your team has played, or the average score of all of their games.
*/

const team = {
    _players: [
        {
            firstName: 'E. Rex',
            lastName: 'Sean',
            age: 35
        },
        {
            firstName: 'Fonda',
            lastName: 'Dix',
            age: 33
        },
        {
            firstName: 'Hugh',
            lastName: 'Janus',
            age: 28
        },
    ],
    _games: [
        {
            opponent: 'Win or Booze',
            teamPoints: 2,
            opponentPoints: 2
        },
        {
            opponent: 'Case of the Runs',
            teamPoints: 1,
            opponentPoints: 3
        },
        {
            opponent: 'No Hit Sherlock',
            teamPoints: 3,
            opponentPoints: 0
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName,lastName,age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };
        this.players.push(player);
    },
    addGame(opponent,teamPoints,opponentPoints) {
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

team.addGame('Fast but Not Furious',3,2);
team.addGame('Sons of Pitches',1,5);
team.addGame('Goal Diggers',2,3);

console.log(team.players);
console.log(team.games);