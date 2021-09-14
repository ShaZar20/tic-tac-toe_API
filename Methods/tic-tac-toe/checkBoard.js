//Expected to include { board as array }
function checkBoard(board){
    if (board === undefined){
		return undefined;
	}
	let winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	let winner = winningCombinations.find(combo =>
        board[combo[0]] !== '' &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]]
    );

    if (!winner && board.indexOf('') > -1){
		return 'In Progress';
	}
	else if (!winner && board.indexOf('') === -1){
		return 'Tie';
	} 
	else return board[winner[0]] + ' Wins';
}

module.exports = checkBoard;