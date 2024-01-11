// Swap elements if they are in the wrong order

// Bubble Sort Function:

function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}

let arr = [5, 1, 8, 4, 2, 7, 3];
console.log(bubbleSort(arr));

// Selection Sort Function:

let arr1 = [5, 1, 3, 9, 4, 7];

function selectionSort(arr1) {
  let n = arr1.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr1[j] < arr1[minIndex]) {
        minIndex = j;
      }
    }

    // Swapping operation
    let swap = arr1[i];
    arr1[i] = arr1[minIndex];
    arr1[minIndex] = swap;
  }

  // Return statement should be outside the outer loop
  return arr1;
}

console.log(selectionSort(arr1));

// Insertion Sort function

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // Move elements greater than the currentElement to one position ahead
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the currentElement at its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}


// Linear search Function:

function linearSearch(arr, target) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the element is found
    }
  }

  return null; // Return null if the element is not found
}


// Binary Search Function:

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index if the element is found
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null; // Return null if the element is not found
}
