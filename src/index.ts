const filterArrayElements = (array: (number | string)[]): number[] => {
  const filterdArray: number[] = [];
  array.forEach((elements) => {
    if (typeof elements === "string") {
      filterdArray.push(parseInt(elements, 10));
    } else {
      filterdArray.push(elements);
    }
    console.log(filterdArray);
  });
  return filterdArray;
};

const numberArray = filterArrayElements([1, "2", 3, 4]);
