const pyramid = (num) => {
  let a1 = 0, // к-сть шарів до наступного поверха
    a2 = 0, // номер елементу в массиві для пошуку потрібного поверху
    b1 = [], // всі повні піраміди
    c1 = 0, // нижня межа шукаємого поверху
    c2 = 0, // верхня межа
    levels = [], // поверхи
    level = 0,
    n1 = 0; // пошук збігу с вершинами

  if (num < 3) return ++level;

  for (let i = 0; i < 1000; i++) {
    a1 += i + 1;
    b1.push(a1);
    levels.push(i);
  }

  n1 = b1.findIndex((item) => item == num);
  if (n1 != -1) return (level = levels[n1 + 1]);

  b1.push(num);
  b1.sort((a, b) => a - b);

  a2 = b1.findIndex((item) => item == num);

  c1 = b1[a2 - 1];
  c2 = b1[a2 + 1];
  return (level = levels[a2]);
};

// Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

// For more examples,
// pyramid(1) == 1
// pyramid(3) == 2
// pyramid(6) == 3
// pyramid(10) == 4
// pyramid(15) == 5
// Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.

// (https://www.codewars.com/kata/5bb3e299484fcd5dbb002912)
