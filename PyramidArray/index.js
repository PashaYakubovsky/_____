function pyramid(n) {
  const m = [];

  for (let i = 0; i < n; i++) {
    const b = [];
    for (let j = 0; j <= i; j++) {
      b.push(1);
    }
    m.push(b);
  }

  return m;
}

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// (https://www.codewars.com/kata/515f51d438015969f7000013)
