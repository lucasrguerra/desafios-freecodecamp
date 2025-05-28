const userInput = document.querySelector('#text-input');
const checkPalindromeBtn = document.querySelector('#check-btn');
const resultDiv = document.querySelector('#result');

const checkForPalindrome = input => {
	const originalInput = input;
	if (input === '') {
		return alert('Please input a value');
	}

	resultDiv.replaceChildren();
	const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
	const reverseString = [...lowerCaseString].reverse().join('');
	let resultMessage = `${originalInput} ${
		lowerCaseString === reverseString ? 'is' : 'is not'
	} a palindrome.`;

	const pTag = document.createElement('p');
	pTag.className = 'user-input';
	pTag.innerText = resultMessage;
	resultDiv.appendChild(pTag);

	resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
	checkForPalindrome(userInput.value);
	userInput.value = '';
});

userInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		checkForPalindrome(userInput.value);
		userInput.value = '';
	}
});