//O(n)

//Array -> 1000 elementos -> 1000 más lento
//Array -> 10 elementos -> 10 elementos;

export function linearSearch(x: number, arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      return i;
    }
  }
  return -1;
}

// console.time("linear-search");
// const result = linearSearch(501, [...Array(500).fill(1), 501]);
// console.log(result);
// console.timeEnd("linear-search");

//O(log n)
function binarySearch(x: number, arr: number[]) {
  let left = 0; // L < x < R
  let right = arr.length - 1;
  while (left <= right) {
    let medium = Math.floor((left + right) / 2);
    if (arr[medium] < x) {
      left = medium + 1;
    } else if (arr[medium] > x) {
      right = medium - 1;
    } else {
      return medium;
    }
  }
  return -1;
}

// function bubbleSort(arr: number[]) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     // Últimos i elementos ya están en su lugar correcto
//     for (let j = 0; j < n - i - 1; j++) {
//       // Intercambiar si el elemento encontrado es mayor
//       // que el siguiente elemento
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
//
// // Ejemplo de uso
// let arr = [64, 34, 25, 12, 22, 11, 90];
// let sortedArr = bubbleSort(arr);
// console.log("Lista ordenada es:", sortedArr);

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let card = arr[i]; // i = 2, arr[i] = 1;
    let j = i - 1;

    // arr[i] = 4; arr[j] = 9;
    while (j >= 0 && arr[j] > card) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = card;
  }
  return arr;
}

const cards = [9, 3, 4, 1, 6, 5]; // [3, 4, 9, 1]
const sorted = insertionSort(cards);

console.log(sorted);
