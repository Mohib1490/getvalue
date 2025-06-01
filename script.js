// 1. Count Vowels
function handleCountVowels() {
  const input = document.getElementById('vowelInput').value;
  const count = (input.match(/[aeiou]/gi) || []).length;
  document.getElementById('vowelResult').innerText = `Vowel Count: ${count}`;
}

// 2. Sort Numbers
function handleSortNumbers() {
  const input = document.getElementById('sortInput').value;
  const sorted = input.split(',').map(Number).sort((a, b) => a - b);
  document.getElementById('sortResult').innerText = `Sorted: ${sorted.join(', ')}`;
}

// 3. Reverse String
function handleReverseString() {
  const input = document.getElementById('reverseInput').value;
  const reversed = input.split('').reverse().join('');
  document.getElementById('reverseResult').innerText = `Reversed: ${reversed}`;
}

// 4. Get Last Element
function handleGetLastElement() {
  const input = document.getElementById('lastElementInput').value;
  const array = input.split(',').map(item => item.trim());
  const last = array[array.length - 1];
  document.getElementById('lastElementResult').innerText = `Last Element: ${last}`;
}

// 5. Merge Arrays
function handleMergeArrays() {
  const input1 = document.getElementById('mergeInput1').value.split(',').map(Number);
  const input2 = document.getElementById('mergeInput2').value.split(',').map(Number);
  const merged = [...input1, ...input2];
  document.getElementById('mergeResult').innerText = `Merged: ${merged.join(', ')}`;
}

// 6. Has Space
function handleHasSpace() {
  const input = document.getElementById('spaceInput').value;
  const hasSpace = input.includes(' ');
  document.getElementById('spaceResult').innerText = hasSpace ? 'Contains space.' : 'No space found.';
}

// 7. Is Empty String
function handleIsEmptyString() {
  const input = document.getElementById('emptyInput').value;
  const isEmpty = input.trim() === '';
  document.getElementById('emptyResult').innerText = isEmpty ? 'Empty string.' : 'Not empty.';
}

// 8. Remove Negative Numbers
function handleRemoveNegative() {
  const input = document.getElementById('removeNegInput').value;
  const result = input
    .split(',')
    .map(Number)
    .filter(num => num >= 0);
  document.getElementById('removeNegResult').innerText = `Filtered: ${result.join(', ')}`;
}


  function animateBorder(card) {
    card.classList.toggle('clicked');
  }

