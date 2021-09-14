# Tic-Tac-Toe Game API

This API designed to play Tic-Tac-Toe player vs player.
An empty Tic-Tac-Toe board is represented as an array like this: ["","","","","","","","",""].
The array in index 0 represent the top left cell, index 4 the middele cell and index 8 the bottom right cell.

In this task I used: React, Node.js, JavaScript and it's connected to live mongoDB server.



# Getting Started

1. Install the API dependencies by running `npm install` from the API's directory in the terminal.
2. Run the API by running `npm start`.
3. Use API requests on `http://localhost:3000/api/`.



# API Requests

## POST
- Create new game - by adding to URL `/new_game`
    expect body object that includes:   `userId`(Number) and `sign`('X'/'O')

- Join to on going game - by adding to URL `/join_game`
    expect body object that includes:   `gameId`(Number) and `userId`(Number)

- Update the game board - by adding to URL `/in_game_move/:gameId`
    expect body object that includes:   `board`(Array) and `playerId`(Number)

## GET
- Get the game status - by adding to URL `/get_status/:gameId`
