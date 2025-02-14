// enum 타입 . 열거형 타입.
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 이넘
enum Role {
  ADMIN, // 0
  USER = 10, // 10
  GUEST, // 11
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '김재희',
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: '홍길동',
  role: Role.USER, // 1 <- 일반 유저
  language: Language.english,
};
const user3 = {
  name: '아무개',
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
// tsx src.chapter5.ts
// tsx -> 파일 실행
// tsc -> 컴파일된 파일 생성
