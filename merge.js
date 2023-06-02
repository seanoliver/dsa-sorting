function merge(arr1, arr2) {
	const output = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length || j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			output.push(arr1[i]);
			i++;
		} else if (arr1[i] > arr2[j]) {
			output.push(arr2[j]);
			j++;
		}

    if (i >= arr1.length) {
      output.push(...arr2.slice(j));
      break;
    }

    if (j >= arr2.length) {
      output.push(...arr1.slice(i));
      break;
    }
	}

	return output;
}

function mergeSort() {}

module.exports = { merge, mergeSort };
