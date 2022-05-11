const filterArrayElements = (array: (number | string)[]): number[] => {
  const filterdArray: number[] = [];
  array.forEach((elements) => {
    if (typeof elements === "string") {
      filterdArray.push(parseInt(elements, 10));
    } else {
      filterdArray.push(elements);
    }
  });
  return filterdArray;
};

const numberArray = filterArrayElements([1, "2", 3, 4]);

console.log(numberArray);
