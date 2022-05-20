// type Name = string;
// type Age = number;
// // 타입들을 확장
// // Person 타입에는 string 또는 number 가 할당될 수 있다.
// type Person = Name | Age;
//==========================================
// type PositionX = { x: number };
// type PositionY = { y: number };

// // { x: number, y: number } 와 같은 타입을 정의하고 싶은  경우
// // object로 선언된 타입들을 하나로 합치고 싶다면
// // & 를 사용하여 하나의 object 타입으로 합칠 수 있다.
// type PositionXY = PositionX & PositionY; // { x: number, y: number }

// let position: PositionXY = { x: 10, y: 20 };
//================================================================
type Join = {
  name: string;
  phone: number;
  email: string;
};
//================================================================
type Minor = { Minor: boolean };

type JoinFinal = Join & Minor;
