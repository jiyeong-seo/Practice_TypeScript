const rockPaperScissors = (
  item: "가위" | "바위" | "보"
): ("가위" | "바위" | "보")[] => {
  return ["가위"];
};

const result = rockPaperScissors("가위");

console.log(result);

type NumOut = (x: number, y: number) => number;

let foo: NumOut = (x, y) => {
  return x + y;
};

foo(10, 11);
