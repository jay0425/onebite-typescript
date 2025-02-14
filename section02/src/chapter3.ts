// object 객체 리터럴 타입 - 구조를 기준으로 타입을 정의한다. => 구조적 타입 시스템
// Property Based Type System
// 이름 => 명목적 타입 시스템
let user: {
  // ? -> 있어도 되고 없어도 됨. optional property. 선택적 프로퍼티
  id?: number;
  name: string;
} = {
  id: 1,
  name: '김재희',
};

let config: {
  // readonly -> 읽기 전용 프로퍼티
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};
