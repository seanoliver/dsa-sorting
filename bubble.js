function bubbleSort(arr) {
	// loop through each item in the array i backwards
	for (let i = arr.length - 1; i >= 0; i--) {
		// loop through each item in the array j forwards
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], [arr[j + 1]]] = [arr[j + 1], [arr[j]]];
			}
		}
	}
  return arr;
}

module.exports = bubbleSort;
