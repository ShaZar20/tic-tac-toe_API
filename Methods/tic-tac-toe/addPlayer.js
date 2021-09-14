//Expected inputElement to include { match game to given gameId , user id to add}
function addPlayer(inputElement){

    let EMPTY_BOARD = ["","","","","","","","",""]
    let { game, userId } = inputElement
    

    if (JSON.stringify(game.board) !== JSON.stringify(EMPTY_BOARD)) {
        throw "There is a Game in progress already";
    }
    
    if(!game.player1.id && !game.player2.id){
        game.player1.id = userId;
        return game;
    }
    if(!game.player2.id && (game.player1.id !== userId)){
        game.player2.id = userId;
        return game;
    }
    if(!game.player1.id && (game.player2.id !== userId)){
        game.player1.id = userId;
        return game;
    }
    if(game.player1.id === userId || game.player2.id === userId){
        throw  "You're already in this game";
    }
    throw  "This room already includ 2 players";
}

module.exports = addPlayer;