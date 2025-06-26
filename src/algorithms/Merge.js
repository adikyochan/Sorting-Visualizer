const mergeSort = (array, position, arraySteps, colorSteps) => {
  // copy the last colorKey state
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  // recursive sort function
  function sort(l, r) {
    if (l >= r) return;
    const m = Math.floor((l + r) / 2);
    sort(l, m);
    sort(m + 1, r);
    merge(l, m, r);
  }

  // merge two sorted halves [l..m] and [m+1..r]
  function merge(l, m, r) {
    const left = array.slice(l, m + 1);
    const right = array.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      // highlight the position we will write
      colorKey[k] = 1;
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
      colorKey[k] = 0;

      if (left[i] <= right[j]) {
        array[k] = left[i++];
      } else {
        array[k] = right[j++];
      }

      // record after writing
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
      k++;
    }

    // copy any leftovers from left
    while (i < left.length) {
      colorKey[k] = 1;
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
      colorKey[k] = 0;

      array[k] = left[i++];
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
      k++;
    }

    // copy any leftovers from right
    while (j < right.length) {
      colorKey[k] = 1;
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
      colorKey[k] = 0;

      array[k] = right[j++];
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
      k++;
    }
  }

  sort(0, array.length - 1);

  // finally mark everything as sorted
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
};

export default mergeSort;
