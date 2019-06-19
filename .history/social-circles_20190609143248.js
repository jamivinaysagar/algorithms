// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M) {
	M = JSON.parse(M);

	// M is now your relationship matrix SxS

	if (M instanceof Array && (M.length === 0 || M[0].length !== M.length)) {
		return 0;
	}
	let friends = [];
	let noFriends = [];

	for (let i = 0; i < M.length; i++) {
		for (let j = 0; j < M.length; j++) {
			if (M[i][j] === 1) {
				findFriends(M, i, j, friends, noFriends);
			}
		}
	}

	var outputString = friends.toString();
	if (noFriends.length > 0) {
		outputString = outputString + '|' + noFriends.join('|');
	}
	return outputString;
}

function findFriends(M, i, j, friends, noFriends) {
	if (M[i][j] !== 1) {
		return;
	}
	if (i !== j && friends.indexOf(i) === -1) {
		friends.push(i);
	}
	if (
		i === j &&
		M[i][i] === 1 &&
		(M[i - 1] ? M[i - 1][i] : 0) === 0 &&
		M[i][i - 1] === 0
	) {
		noFriends.push(i);
	}
	M[i][j] = 'read';

	for (let k = 0; k < M.length; k++) {
		findFriends(M, j, k, friends, noFriends);
	}
}

console.log(solution([[1, 1, 0], [1, 1, 0], [0, 0, 1]].toString()));
console.log(solution([[1, 1, 0], [1, 1, 1], [0, 1, 1]].toString()));
