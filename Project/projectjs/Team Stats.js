const team = {
    // _players = private players;
    _players: [ 
        { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
        { firstName: 'Pablooo', lastName: 'Sanchezadsa', age: 12 },
        { firstName: 'Pablo3', lastName: 'Sanchez111', age: 13 }
    ],
    _games: [
        { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
        { opponent: 'Bros', teamPoints: 52, opponentPoints: 87 },
        { opponent: 'Trcos', teamPoints: 48, opponentPoints: 20 }
    ],
    //chua hieu cho nay
    get players() { return this._players; },
    get games() { return this._games; },
    // chua hieu cho nay
    addPlayer(firstName, lastName, age) {
        let player = { firstName: firstName, lastName: lastName, age: age };
        this.players.push(player);
    },
    addGame(opp, myPts, oppPts) {
        const game = { opponent: opp, teamPoints: myPts, opponentPoints: oppPts };
        this.games.push(game);
    }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
team.addGame('Pikachu', 100, 97);
team.addGame('Pokemon', 100, 96);
console.log(team._games);




