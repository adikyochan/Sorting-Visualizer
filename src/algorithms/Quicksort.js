const quickSort = (array, position, arraySteps, colorSteps) => {
  // clone last colorKey
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  function sort(l, r) {
    if (l >= r) return;
    // Lomuto partition: pivot = array[r]
    const pivot = array[r];
    let i = l;
    
    // highlight pivot
    colorKey[r] = 1;
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());
    colorKey[r] = 0;

    for (let j = l; j < r; j++) {
      // highlight comparison
      colorKey[j] = 1;
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
      colorKey[j] = 0;

      if (array[j] < pivot) {
        // swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
        i++;
      }
    }

    // place pivot in correct spot
    [array[i], array[r]] = [array[r], array[i]];
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());

    // mark pivot as sorted
    colorKey[i] = 2;
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());
    colorKey[i] = 0;

    // recursively sort partitions
    sort(l, i - 1);
    sort(i + 1, r);
  }

  sort(0, array.length - 1);
  // final: mark all sorted
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
};

export default quickSort;