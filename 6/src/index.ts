// const filterArrayElements = (array: (number | string)[]): number[] => {
//   const filterdArray: number[] = [];
//   array.forEach((elements) => {
//     if (typeof elements === "string") {
//       filterdArray.push(parseInt(elements, 10));
//     } else {
//       filterdArray.push(elements);
//     }
//   });
//   return filterdArray;
// };

// const numberArray = filterArrayElements([1, "2", 3, 4]);

// console.log(numberArray);
// =======================================================
const getLastSubject = (subjects: { subject: string | string[] }): string => {
  if (Array.isArray(subjects.subject)) {
    const lastItem: number = subjects.subject.length - 1;

    return subjects.subject[lastItem];
  } else {
    return subjects.subject;
  }
};

console.log(getLastSubject({ subject: ["korean", "art"] }));
