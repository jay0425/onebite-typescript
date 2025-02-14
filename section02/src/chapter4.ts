// 타입 별칭 - 타입을 변수처럼 정의. 타입 알리아스

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: '김재희',
  nickname: 'jay',
  birth: '1994.04.25',
  bio: '안녕하세요',
  location: '성남시',
};

let user2: User = {
  id: 2,
  name: '김땡',
  nickname: 'Jin',
  birth: '1994.04.25',
  bio: '안녕하세요',
  location: '성남시',
};

// ------------------------------------------------------

// 인덱스 시그니처 - key와 value의 규칙을 기준으로 객체의 타입을 정의
// 모든 객체 허용함. 규칙을 위반하지 않는 한.
type CountryCodes = {
  [key: string]: string;
};

// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
// };

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  // Korea 객체 타입을 반드시 가지도록 정의
  Korea: number;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
  //   UnitedState: 840,
  //   UnitedKingdom: 826,
};
