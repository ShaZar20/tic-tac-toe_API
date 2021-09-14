const apiMethods = require('../Methods/api/apiMethods');
const express = require('express');

const router = express.Router();



router.post('/new_game', apiMethods.NewGame);

router.post('/join_game', apiMethods.JoinGame);

router.post('/in_game_move/:gameId', apiMethods.Move)

router.get('/get_status/:gameId', apiMethods.GameStatus)



module.exports = router;