/*

function is_Palindrome(str1) {
	var rev = str1
		.split('')
		.reverse()
		.join('');
	return str1 == rev;
}

function longest_palindrome(str1) {
	var max_length = 0,
		maxp = '';

	for (var i = 0; i < str1.length; i++) {
		var subs = str1.substr(i, str1.length);

		for (var j = subs.length; j >= 0; j--) {
			var sub_subs_str = subs.substr(0, j);
			if (sub_subs_str.length <= 1) continue;

			if (is_Palindrome(sub_subs_str)) {
				if (sub_subs_str.length > max_length) {
					max_length = sub_subs_str.length;
					maxp = sub_subs_str;
				}
			}
		}
	}

	return maxp;
}
console.log(longest_palindrome('abracadabra'));
console.time('rama');
console.log(
	longest_palindrome(
		'HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDEHYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'
	)
);
console.timeEnd('rama');


*/

function isPrimeNumber(n) {
	for (var i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
	return n > 1;
}

function reverse(s) {
	var o = [];
	for (var i = 0, len = s.length; i <= len; i++) {
		o.push(s.charAt(len - i));
	}
	return o.join('');
}

function isPalindrome(word) {
	return word === reverse(word);
}

function longest_palindrome(s) {
	let maxSubString = '';
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length - i; j++) {
			let subString = s.substring(j, j + i + 1);
			if (isPalindrome(subString)) {
				maxSubString =
					subString.length > maxSubString.length ? subString : maxSubString;
			}
		}
	}
	return isPrimeNumber(maxSubString) ? 'YES' : 'NO';
}
console.log(longest_palindrome('abracadabra'));
console.log(
	longest_palindrome('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE')
);
