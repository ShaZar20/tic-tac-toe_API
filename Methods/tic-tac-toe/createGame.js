//Expected inputElement to include { user id, sign }
function createGame(inputElement){

    let { userId, sign } = inputElement;
    
    let game = {
        board: ["","","","","","","","",""],
        player1: {
            id: userId,
            sign: sign.toUpperCase()
        },
        player2:{
            id: null,
            sign: (sign.toUpperCase() === 'X'? 'O' : 'X')
        },
        nextToPlay: null,
        winnerId: null,
        status: "In Progress",
        gameId: `${Date.now()}`,
    }
    return game;
}

module.exports = createGame;