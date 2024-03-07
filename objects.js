const team = {
    _players: [{
            firstName: 'Richard',
            lastName: 'Grayson',
            age: 32
        },
        {
            firstName: 'Damien',
            lastName: 'Wayne',
            age: 16
        },
        {
            firstName: 'Tim',
            lastName: 'Drake',
            age: 24
        }
    ],
    _games: [{
            opponent: 'Riddler',
            teamPoints: 25,
            opponentPoints: 5
        },
        {
            opponent: 'Bane',
            teamPoints: 10,
            opponentPoints: 25
        },
        {
            opponent: 'Joker',
            teamPoints: 15,
            opponentPoints: 15
        }
    ],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {};
        player.firstName = newFirstName;
        player.lastName = newLastName;
        player.age = newAge;
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {};
        game.opponent = newOpponent;
        game.teamPoints = newTeamPoints;
        game.opponentPoints = newOpponentPoints;
        this._games.push(game);
    }
}
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team._players)
console.log(team._games)