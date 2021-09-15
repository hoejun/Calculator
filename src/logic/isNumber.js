//화살표 함수에서는 export default 화살표 함수 안됨. 
//밑에 export default isNumber를 따로 작성.
export const isNumber = (item) => {
  //괄호 안에 임의의 숫자를 찾는다. 0~9, +는 최소한 한개
  return /[0-9]+/.test(item);//.test()는 문자열이 정규표현식을 만족하는지 boolean값 리턴
}

export default isNumber
// export default function isNumber(item) {
//   //괄호 안에 임의의 숫자를 찾는다. 0~9, +는 최소한 한개
//   return /[0-9]+/.test(item);//.test()는 문자열이 정규표현식을 만족하는지 boolean값 리턴
// }
