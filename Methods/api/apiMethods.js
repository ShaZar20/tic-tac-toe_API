const createGame = require('../tic-tac-toe/createGame');
const addPlayer = require('../tic-tac-toe/addPlayer');
const addMove = require('../tic-tac-toe/addMove');
const checkBoard = require('../tic-tac-toe/checkBoard');
const Game = require('../../models/Game');


async function NewGame (req,res){ 
    let input = req.body;
    let output = createGame(input);
    let game = new Game(output);
    game.save()
        .then(savedGame => {
            res.json(savedGame)
        })
        .catch(err => {
            res.json(err)
        })
}

async function JoinGame(req,res){
    let game = new Game();
    let output = new Game();
    try{
        game = await GetMatchingGame(req.body.gameId);
        if (!game){
            res.json({gameId: req.body.gameId, err:"Game not found"})
        }

        output = addPlayer({ game: game, userId: req.body.userId })
        output.save()
            .then(savedGame =>{
                res.json(savedGame)
            }) 
    }catch (err){
        res.json(err)
    }
}

async function GameStatus(req,res){
    try{
        game = await GetMatchingGame(req.params.gameId);
        if (!game){
           res.json({gameId: req.params.gameId, err:"Game not found"})
        }  
    } catch(err){
        res.json(err)
    }

    let output = checkBoard(game.board)
    res.json({status : output});
}

async function Move(req, res){
    let gameId = req.params.gameId;
    try{
        game = await GetMatchingGame(gameId);
        if (!game){
            res.json({gameId: gameId, err:"Game not found"})
        }  

    let input = req.body
    let output = addMove({ game: game, ...input }); 
    output.save()
            .then(savedGame =>{
                res.json(savedGame)
            }) 
    }catch (err){
        res.json(err)
    }
}


const GetMatchingGame = async (gameId) => {
    let games = []
    try {
        games = await Game.find();
    } catch (err){
        return err;
    }

    if(games === []) {
        return {err: "There is no games"};
    }
    let matchGame = new Game();
    games.find( (element) => {
        if(element.gameId == gameId){
            matchGame = element;
        }
    })
    if(!matchGame) return 0;
    return matchGame;
}




module.exports = {
    NewGame,
    JoinGame,
    GameStatus,
    Move
};