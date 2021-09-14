const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    board: {
        type: Array,
        require: true
    },
    player1:{
        id: Number,
        sign: String 
    },
    player2:{
        id: Number,
        sign: String
    },
    nextToPlay: {
        type: Object,
        default: null
    },
    winnerId: {
        type: Number,
        default: null
    },
    status: String,
    gameId:{
        type: Number,
        require: true
    } 
})

module.exports = mongoose.model('Game', GameSchema);