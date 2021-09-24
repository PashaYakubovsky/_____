function comp(array1, array2) {
  if (!array1 || !array2) return false;
  const arr1 = array1.map((item) => Math.pow(item, 2)).sort();
  const arr2 = array2.slice().sort();

  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
