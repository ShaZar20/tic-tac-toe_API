const checkBoard = require('./checkBoard'); 

//Expected inputElement to include { match game to given gameId, the new game board as array, player id that play }
function addMove(inputElement){
    let { game, board, playerId } = inputElement
    let x =0 , o = 0
    board.forEach(element => {
        if (element.toUpperCase() === 'X') x++
        if (element.toUpperCase() === 'O') o++
    });
    
    if (game.winner && game.winner === playerId){
        throw `YOU WON`
    }
    if (game.winner && game.winner.id !== playerId){
        throw `YOU LOSE`
    }
    if (game.nextToPlay !== null && game.nextToPlay.id !== playerId){
        throw "NOT YOUR TURN"
    } 
    if (x-o > 1 || o-x > 1){
        throw  "Invalid move"
    } 

    let output = checkBoard(board)
    switch (output.toUpperCase()){
        case "IN PROGRESS":
            game.board = board
            game.player1.id === playerId ? game.nextToPlay = game.player2 : game.nextToPlay = game.player1;
            break;
        
        case "TIE":
            game.board = board
            game.player1.id === playerId ? game.nextToPlay = game.player2 : game.nextToPlay = game.player1;
            game.status = "Tie"
            break;

        case "X WINS":
            game.board = board
            if (game.player1.sign.toUpperCase() === 'X'){
                game.nextToPlay = game.player1;
                game.winnerId = game.player1.id;
            }else {
                game.nextToPlay = game.player2;
                game.winnerId = game.player2.id;
            }
            game.status = "X WINS"
            break;

        case "O WINS":
            game.board = board
            if (game.player1.sign.toUpperCase() === 'O'){
                game.nextToPlay = game.player1;
                game.winnerId = game.player1.id;
            }else {
                game.nextToPlay = game.player2;
                game.winnerId = game.player2.id;
            }
            game.status = "O WINS"            
            break;

        default: {
            throw  "board undifined"       
        }
    }
    return game;
}

module.exports = addMove;