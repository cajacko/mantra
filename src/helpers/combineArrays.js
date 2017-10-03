export default function (arr1, arr2) {
  const arr = Object.assign([], arr1);

  if (arr2 && Array.isArray(arr2)) {
    arr2.forEach((item) => {
      if (!arr.includes(item)) {
        arr.push(item);
      }
    });
  }

  return arr;
}
