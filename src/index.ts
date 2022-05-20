type CutZero = (item: string) => string;

const cutZero: CutZero = (item) => {
  if (item[0] === "0") {
    return item.substr(1);
  } else {
    return item;
  }
};

type RemoveDash = (item: string) => number;

const removeDash: RemoveDash = (item) => {
  const result = item.replace(/-/g, "");
  return parseFloat(result);
};

type PrintNumber = (
  phoneNumber: string,
  cutZero: CutZero,
  removeDash: RemoveDash
) => void;

const printNumber: PrintNumber = (phoneNumber, cutZeroFn, removeDashFn) => {
  const cutZeroResult = cutZeroFn(phoneNumber);
  const removeDashResult = removeDashFn(cutZeroResult);

  console.log(removeDashResult);
};

printNumber("010-1234-5678", cutZero, removeDash);
