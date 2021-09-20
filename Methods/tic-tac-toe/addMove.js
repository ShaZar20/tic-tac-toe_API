const checkBoard = require('./checkBoard'); 

//Expected inputElement to include { match game to given gameId, the new game board as array, player id that play }
function addMove(inputElement){
    let { game, board, playerId } = inputElement;

    let moveSign = board.filter((x, index) => game.board[index] !== x);
    if (moveSign.length > 1) {
        throw  "Invalid move"
    }

    moveSign = moveSign[0].toUpperCase();
    if (game.player1.id === playerId && game.player1.sign !== moveSign || 
        game.player2.id === playerId && game.player2.sign !== moveSign) {
            throw  "Invalid move"
    }
    if (game.winnerId && game.winnerId === playerId) {
        throw `YOU WON`
    }
    if (game.winnerId && game.winnerId !== playerId) {
        throw `YOU LOSE`
    }
    if (game.nextToPlay !== null && game.nextToPlay.id !== playerId) {
        throw "NOT YOUR TURN"
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