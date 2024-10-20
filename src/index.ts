import { info, log } from "console";
import { checkPrime } from "crypto";
import { Input } from "postcss";

const hello = (name: string): string => {
  return `Hello、${name}!!`;
};
console.log(hello("Tod"));

//===================================================
// Object型 interface
//===================================================
//1. オブジェクトの各プロパティ毎に型を定義
const person: {
  name: string;
  age: number;
} = {
  name: "Taro",
  age: 20,
};

console.log(person);

//2.interfaceを使用してオブジェクトの型を定義
interface Person {
  name: string;
  age: number;
}
const person2: Person = {
  name: "Akira",
  age: 35,
};
console.log(person2);

const data: { text: string; id: number } = { text: "テキスト", id: 1 };
console.log(data);
const objectSample: { name: string; age: number } = { name: "David", age: 33 };
console.log(objectSample);

//===================================================
// Array型
//===================================================
const animals: string[] = ["Dog", "Cat", "Bird"];
const numbers: number[] = [1, 2, 3];
const fruits: string[] = ["banana", "grape", "apple"];
const arraySample: string[] = ["りんご", "みかん", "ブドウ"];

const animals2: Array<string> = ["Horse", "Bear", "Tiger"];
const numbers2: Array<number> = [100, 200, 300];
const arraySample2: Array<string> = ["京都", "大阪", "兵庫"];

const people: Array<string> = ["太郎", "次郎", "三郎"];

//===================================================
//Union型
//===================================================
//変数や配列に複数の型を指定できる
//型を指定する時は「|(バーティカルライン)」を使用して列挙する
let something: number | string = 5;
something = "文字列の値";
const array: (string | number)[] = ["Apple", 20, "Banana", 25, "Orange"];
const printLength = (input: string | number) => {
  if (typeof input === "string") {
    console.log(`文字列の長さ: ${input.length}`);
  } else {
    console.log(`数値の列:${input}`);
  }
};
printLength("Hello");
printLength(15);

let something2: string | boolean = true;
let UnionSample: string | number = "数値を入れることもできます";
console.log(UnionSample);
UnionSample = 258;
console.log(UnionSample);

//===================================================
//type
//===================================================
//型を変数のようjに扱う時に使用
//letやconstと同じように型名の前にtypeと記述することで宣言できる
//型は特定のデータの形式や構造を定義するために使用される。
//そのため、コードの読みやすさや保守性が向上する。

//数値の型を定義
type ColorCode = number;

//オブジェクトの型を定義
type User = {
  name: string;
  age: number;
};

type IdType = number;
const idSample: IdType = 789;
console.log(idSample);

type ProfileType = { name: string; age: number };
const ProfileSample: ProfileType = {
  name: "Gordon",
  age: 51,
};
console.log(ProfileSample);

type FruitsType = string[];
const fruitsList: FruitsType = ["スイカ", "メロン", "マンゴー"];
console.log(fruitsList);

type Gender = "male" | "female";
type CustomerInfo = { name: string; age: number; gender: Gender };
const newCustomer: CustomerInfo = {
  name: "Cameron",
  age: 21,
  gender: "female",
};
console.log(newCustomer);

//===================================================
//引数・返り値の型定義
//===================================================
//関数の引数・返り値を定義することができる
//引数は型推論されないので最優先で型注釈する必要がある
// const 関数名 = (引数: 引数の型) : 返り値の型 => {}
// type 関数型名 = (引数: 引数の型) => 返り値の型

//引数に2つの数値を受け取り、その合計値を返す関数
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

type FuncType = (num: number) => number;
//引数に1つの数値を受け取り2倍した値を返す関数
const double: FuncType = (num) => {
  return num * 2;
};
console.log(double(3));

const taxCulc: FuncType = (num) => {
  return num * 1.1;
};
console.log(taxCulc(3300));

type FuncType2 = (word: string) => boolean;
const testFunction: FuncType2 = (word) => {
  return !word;
};

const trippleNumber = (sampleNumber: number) => {
  console.log(sampleNumber * 3);
};
trippleNumber(768);

const stringFunction = (stringSample: string) => {
  console.log(stringSample.toUpperCase());
};
stringFunction("react");

//===================================================
//any型
//===================================================
//通常のJavaScriptの変数と同様に文字列・数値・配列・オブジェクト等を自由に代入可能な変数を宣言できる
//any型以外の型で宣言した変数に、any型の変数を代入すると値だけでなく型も上書きされるため基本的には使用を避ける
let everything: any = true;
everything = "hello";
everything = ["hello", 25, false];
everything = {};

let anything: any[] = [true, false];

let something3: string = "hello";
let anything2: any = 0;
something3 = anything2;
console.log(something3);

type Gender2 = "male" | "female";
type Club = "baseball" | "soccer" | "tennis";
type StudentType = {
  name: string;
  age: number;
  gender: Gender2;
  club: Club;
};
const student1: StudentType = {
  name: "Jhon",
  age: 16,
  gender: "male",
  club: "baseball",
};
const student2: StudentType = {
  name: "Rachel",
  age: 15,
  gender: "female",
  club: "tennis",
};
console.log(student1);
console.log(student2);

//===================================================
//型アサーション(asもしくは<>)
//===================================================
//型アサーションは変数に対して型を明示的にしてしてコンパイラに対してその変数を教えることができる機能。2つの方法があり、asキーワードと<>を使って表現できる。
//asを使った型アサーションの書き方
const name: string | undefined = "Jim";
const nameLength: number = (name as string).length;
//<>を使った型アサーションの書き方
const name2: string | undefined = "Gave";
const nameLength2: number = (<string>name).length;

//ユニオン型の値をstring型に型アサーションを行う
const name3: string | undefined = "Tom";
const upperCaseName = (name3 as string).toUpperCase();
console.log(upperCaseName);

//空のオブジェクトに型アサーションを行う
interface SampleType {
  text: string;
}
let sampleValue = {} as SampleType;
sampleValue.text = "テキスト";

const text: string | undefined = "hello world";
const textLength = (text as string).length;
console.log(textLength);

let numberValue: number = 123;
let stringValue: string = "abc";
numberValue = stringValue as any;
console.log(numberValue);

const numberFunction = (input: number) => {
  let word = "abc";
  word = input as any;
};
numberFunction(234);

//後からプロパティを追加
interface ObjectType {
  count: number;
}
const objectValue = {} as ObjectType;
objectValue.count = 10;
console.log(objectValue.count);

const getLowerCase = (input: string | undefined) => {
  const lowerCase = (input as string).toLowerCase();
  console.log(lowerCase);
};
getLowerCase("NIKE");

//===================================================
// ?(optional chaining)
//===================================================
//undefinedかnullの可能性があるプロパティにアクセスしようとした際にエラーを防ぐことができる
const sampleFunction = (user: any) => {
  console.log(user.name?.value);
};
sampleFunction({ age: 20 });

//===================================================
// ?(optional parameter)
//===================================================
//オプション引数(optional parameter)は引数に?をつけることで引数を省略することができる
const numberFunction2 = (count?: number) => {
  if (typeof count === "number") {
    console.log(count * 2);
  } else {
    console.log(count);
  }
};
numberFunction2(12);
numberFunction2();

type User2 = {
  name?: string;
  age: number;
};

type Cartype = string[];
const cars: Cartype = ["フェラーリ", "ランボルギーニ", "ベンツ"];
console.log(cars);

type Gender3 = "male" | "female";
type Stable = "Rittou" | "Miho";
type HorseType = {
  name: string;
  age: number;
  gender: Gender3;
  stable: Stable;
};
const throubred1: HorseType = {
  name: "ディープインパクト",
  age: 4,
  gender: "male",
  stable: "Miho",
};
const throubred2: HorseType = {
  name: "オルフェーヴル",
  age: 4,
  gender: "male",
  stable: "Miho",
};
const throubred3: HorseType = {
  name: "アーモンドアイ",
  age: 3,
  gender: "female",
  stable: "Rittou",
};

console.log(throubred1);
console.log(throubred2);
console.log(throubred3);

const sumPay = (num1: number, num2: number): number => {
  return num1 + num2;
};

//====================================================================
// in
//====================================================================
//オブジェクト内にあるプロパティやメソッドを絞り込むことgできる
//プロパティの有無によって条件分岐を行う
interface Tweet {
  likedCount: number;
}
interface User3 {
  name: string;
}

const getData = (input: Tweet | User3) => {
  if ("likedCount" in input) {
    return `いいね数: ${input.likedCount}`;
  } else {
    return `ユーザー名: ${input.name}`;
  }
};

const tweet: Tweet = {
  likedCount: 100,
};
console.log(getData(tweet)); //'いいね数: 100'

const user: User3 = {
  name: "Taro",
};

console.log(getData(user)); //'ユーザー名:Taro'

interface Car {
  color: string;
}
interface Airplane {
  speed: number;
}

const judgeVehicle = (input: Car | Airplane) => {
  if ("color" in input) {
    return "Car";
  } else {
    return "Airplane";
  }
};
console.log(
  judgeVehicle({
    color: "blue",
  })
);

//====================================================================
// instanceof
//====================================================================
//あるオブジェクトが指定したクラスのインスタンスであるかどうかを判定されるために使用される
//1.どのクラスのインスタンスか判定
class Dog {
  constructor(public name: string) {}
}
class Cat {
  constructor(public name: string) {}
}
const myDog = new Dog("リュウ");
console.log(myDog instanceof Dog); //true

const myCat = new Cat("リム");
console.log(myCat instanceof Dog); //false

//2.インスタンスを絞り込んで文字列を出力
const isDog = (pet: Dog | Cat): void => {
  if (pet instanceof Dog) {
    console.log("犬です");
  } else {
    console.log("犬ではありません");
  }
};
isDog(myDog); //犬です
isDog(myCat); //犬ではないです

//型ガード(in)

type User4 = {
  name: string;
};
type AdminUser = User4 & {
  admin: boolean;
};
const judgeAdmin = (inputUser: User4 | AdminUser) => {
  if ("admin" in inputUser) {
    return "AdminUserです";
  } else {
    return "AdminUserではありません";
  }
};
const user2: AdminUser = {
  name: "Tom",
  admin: true,
};
const user3: User4 = {
  name: "Katy",
};
console.log(judgeAdmin(user2));
console.log(judgeAdmin(user3));

//型ガード(instanceof)
class User5 {
  constructor(public name: string) {}
}
class AdminUser2 extends User5 {
  constructor(name: string, public admin: boolean) {
    super(name);
  }
}
const judgeAdmin2 = (inputUser2: User5 | AdminUser2) => {
  if (inputUser2 instanceof AdminUser2) {
    return "AdminUser2です";
  } else {
    return "AdminUser2ではありません";
  }
};

const user4 = new AdminUser2("Tony", true);
console.log(judgeAdmin2(user4));

//====================================================================
// ジェネリクス
//====================================================================
//型をパラメータとして受け取り、その型を使用してコードを書くことができる機能。これにより同じロジックを異なる型で再利用することができる。
//ジェネリクスを使用することで汎用的で柔軟な型を作成することができる。
//一般的にはtypeの頭文字である「T」を用いることが多い。

//関数の引数と返り値に動的な型を指定する
const checkValue = <T>(value: T): T => {
  return value;
};
console.log(checkValue("Hello")); //Hello
console.log(checkValue(32)); //32
console.log(checkValue({ name: "Tom" })); //{name/ 'Tom'}

//インターフェースのプロパティに動的な型を指定する
interface User6<T, K> {
  name: T;
  age: K;
}
const user5: User6<string, number> = {
  name: "Tod",
  age: 40,
};
console.log(user5);

const checkInput = <T>(Input1: T, input2: T): T => {
  return input2;
};
console.log(checkInput("Hello", "World"));
console.log(checkInput(1, 2));

interface User7<T> {
  name: string;
  age: number;
  id: T;
}
const user6: User7<number> = {
  name: "Kate",
  age: 32,
  id: 123,
};

const user7: User7<string> = {
  name: "Steve",
  age: 35,
  id: "abc",
};
console.log(user6);
console.log(user7);

//====================================================================
// Partial<T>
//====================================================================
//Partialはオブジェクト型のすべてのプロパティを省略可能にすることができる。l￥これは、ある型の一部のプロパティだけを持つオブジェクトを作成した場合に非常に役に立つ。
//Tというオブジェクト型のプロパティを省略可能にした型を生成
interface User8 {
  name: string;
  age: number;
}
type PartialUser = Partial<User8>;

type User9 = {
  name: string;
  age: number;
};
type PartialUser2 = Partial<User9>;
const user8: PartialUser2 = {
  name: "Scott",
  age: 52,
};
const user9: PartialUser2 = {
  name: "Nate",
};
console.log(user8);
console.log(user9);

type Post = {
  id: number;
  text?: string;
  createdAt: Date;
};
type PartialPost = Partial<Post>;
const post: PartialPost = {
  id: 1,
  text: "Hello",
  createdAt: new Date(),
};
const post2: PartialPost = {
  id: 1,
};
console.log(post);
console.log(post2);

//====================================================================
// Required<T>
//====================================================================
//Requiredは、オブジェクト型の全てのプロパティを必須にすることができる。
//例えばユーザー情報を扱う際に、名前と年齢の両方が必ず存在することを保証したい場合などに使う

interface User10 {
  name?: string;
  age?: number;
}
type RequiredUser = Required<User10>;

type User11 = {
  name: string;
  age?: number;
};
type RequiredUser2 = Required<User11>;
const user10: RequiredUser2 = {
  name: "ユーザー10",
  age: 35,
};
console.log(user10);

type Post2 = {
  text?: string;
  date?: Date;
};
type RequiredPost = Required<Post2>;
const post3: RequiredPost = {
  text: "コメント",
  date: new Date(),
};
console.log(post3);

//====================================================================
// Pick
//====================================================================
//Pickは指定したプロパティのみを取り出すことができる。
//オブジェクトのみを持つ新しい型を作成する際に使われる。
interface Person2 {
  name: string;
  age: number;
  work: string;
  income: number;
}

type Child = Pick<Person, "name">;

const myson: Child = {
  name: "Ryan",
};
console.log(myson);

interface Person3 {
  name: string;
  age: number;
  work: string;
  income: number;
}

type Child2 = Pick<Person2, "name" | "age">;
const myDaughter: Child2 = {
  name: "Julian",
  age: 12,
};
console.log(myDaughter);

interface Color {
  red: number;
  green: number;
  blue: number;
}
type RedColor = Pick<Color, "red">;
const red: RedColor = {
  red: 255,
};

type Worker = {
  id: number;
  name: string;
  age: number;
};

type PickId = Pick<Worker, "id">;
const worker: PickId = {
  id: 3,
};
console.log(worker);

type PickIdName = Pick<Worker, "id" | "name">;
const worker2: PickIdName = {
  id: 1,
  name: "Jeff",
};
console.log(worker2);

//====================================================================
// Omit
//====================================================================
//Omitは指定したプロパティを除外した型を作成する。
//オブジェクトの一部のプロパティを除外して新しい型を作成する時に使われる
interface Person3 {
  name: string;
  age: number;
  work: string;
  income: number;
}
type Child3 = Omit<Person3, "income">;
const mySon2: Child3 = {
  name: "Harry",
  age: 5,
  work: "student",
};
console.log(mySon2);

type Child4 = Omit<Person3, "work" | "income">;
const myDaughter2: Child4 = {
  name: "Mary",
  age: 13,
};
console.log(myDaughter2);

type Worker2 = {
  id: string;
  name: string;
  age: number;
};

type OmitId = Omit<Worker2, "id">;
const worker3: OmitId = {
  name: "Bob",
  age: 55,
};
console.log(worker3);

type OmitidName = Omit<Worker, "id" | "name">;
const worker4: OmitidName = {
  age: 35,
};
console.log(worker4);

type Worker3 = {
  id: string;
  name?: string;
  age?: number;
};
type RequiredNameAge = Required<Pick<Worker3, "name" | "age">>;
const worker5: RequiredNameAge = {
  name: "Josh",
  age: 77,
};
console.log(worker5);

type Worker4 = {
  id: number;
  name: string;
  age: number;
};

type PartialNameAge = Partial<Pick<Worker4, "name" | "age">>;
const worker6: PartialNameAge = {
  name: "Mike",
  age: 44,
};
const worker7: PartialNameAge = {
  name: "Dyan",
};
const worker8: PartialNameAge = {
  age: 19,
};
console.log(worker6);
console.log(worker7);
console.log(worker8);

//====================================================================
// Exclude
//====================================================================
//1つの型(型T)からもう一つの型(型U)に存在する項目を除外することができる。
//これは主に複数の型を1つにまとめた「ユニオン型」に対して使われる。
//基本的には取り除く型を1つずつ指定するが、関数の型についてはFunction型で一括で取り除くことができる。
type UnionType = string | number | boolean;
type NewUnionType = Exclude<UnionType, boolean>;

const newUnionType: NewUnionType = 7;
const newUnionType2: NewUnionType = "apple";

console.log(newUnionType);
console.log(newUnionType2);

type Fruit = "apple" | "orange" | "banana";
type NewFruit = Exclude<Fruit, "orange" | "banana">;

const newFruit: NewFruit = "apple";
console.log(newFruit);

//関数型を取り除く
type Hoge = number | boolean | (() => void) | (() => number);
type NotFunction = Exclude<Hoge, Function>;

const notFunction: NotFunction = 2;
const notFunction2: NotFunction = true;
const notFunction3: Hoge = () => 2;
const notFunction4: Hoge = () => {};
console.log(notFunction);
console.log(notFunction2);

type UnionType2 = string | number | boolean;
type ExcludeUnionType = Exclude<UnionType2, string>;

const excludedUnionType: ExcludeUnionType = true;
const excludedUnionType2: ExcludeUnionType = 3;
console.log(excludedUnionType);
console.log(excludedUnionType2);

type Status = "loading" | "success" | "false";
type ExcludedStatus = Exclude<Status, "loading" | "error">;

const excludedStatus: ExcludedStatus = "success";
console.log(excludedStatus);

//====================================================================
// Extract
//====================================================================
//1つの型(型T)ともう一つの型(型U)の両方に存在する項目を抽出することができる。
//これは主に複数の型を1つにまとめた「ユニオン型」に対して使われる。
//基本的には1つずつ項目を指定するが、関数の型はFunction型で一括で指定することができる

type UnionType3 = string | number | boolean;
type NewUnionType2 = Extract<UnionType3, string | boolean>;

const newUnionType3: NewUnionType2 = "Good Morning!";
const newUnionType4: NewUnionType2 = false;
console.log(newUnionType3);
console.log(newUnionType4);

//関数型を取り出す
//数値型、真偽値型、戻り値のない関数型、戻り値が数値型の関数を持つユニオン型

type Hoge2 = number | boolean | (() => void) | (() => number);
type IsFunction = Extract<Hoge2, Function>;

const normalFunction: IsFunction = () => console.log("hoge");
const numberFunction3: IsFunction = () => 73;
normalFunction();
console.log(numberFunction3());

//オブジェクトの型を取り出す
type Person4 =
  | {
      type: "student";
      name: string;
      grade: number;
    }
  | {
      type: "teacher";
      age: number;
      subject: string;
    };

type Student = Extract<Person4, { type: "student" }>;
const student: Student = {
  type: "student",
  name: "David",
  grade: 16,
};
console.log(student);

type UnionType4 = string | number | boolean;
type ExtractUnionType = Extract<UnionType4, string | number>;

const extractUnionType: ExtractUnionType = "Good Evenig";
const extractUnionType2: ExcludeUnionType = 35;
console.log(extractUnionType);
console.log(extractUnionType2);

type Vechile =
  | {
      type: "car";
      wheels: number;
      country: string;
    }
  | {
      type: "bicycle";
      wheels: number;
    }
  | {
      type: "airplane";
      distance: number;
      country: string;
    };

type Car2 = Extract<Vechile, { type: "car" }>;
const car2: Car2 = {
  type: "car",
  wheels: 4,
  country: "Japan",
};
console.log(car2);

//====================================================================
// Readonly<T>
//====================================================================
//Readonlyはオブジェクトのすべてのプロパティを読み取り専用にする
//読み取り専用のプロパティの値は変更することができなくなる

interface User12 {
  name: string;
  age?: number;
}
type NotChangeUser = Readonly<User12>;
const user11: NotChangeUser = {
  name: "Jhon",
  age: 22,
};
console.log(user11.name);

// user11.name = "Mike";//エラー

type User13 = {
  id: number;
  name: string;
  age: number;
};
type ReadonlyUser = Readonly<User13>;

const user14: ReadonlyUser = {
  id: 12,
  name: "Karen",
  age: 22,
};
console.log(user14);

type Post3 = {
  id: number;
  readonly title: string;
  content: string;
};
type ReadonlyPost = Readonly<Post3>;
const post4: ReadonlyPost = {
  id: 7,
  title: "Dragon Ball",
  content: "孫悟空と仲間の冒険劇",
};
console.log(post4);

//====================================================================
// NonNullable
//====================================================================
//与えられた型からnullとundefinedを取り除く

type Hoge3 = string | number | null | undefined;
type Fuga = NonNullable<Hoge3>;

type UnionType5 = string | number | null | undefined;
type NonNullableUnionType = NonNullable<UnionType5>;

const unionType6: NonNullableUnionType = "How are you?";
console.log(unionType6);

type User14 = {
  id: number | null;
  name: string;
  age: number;
};
type NonNullableId = NonNullable<User14["id"]>;
const userId: NonNullableId = 76;
console.log(userId);

//====================================================================
// Parameters
//====================================================================
//関数の引数を取得することができる。
//生成される型はタプル型になる
const createMessage = (name: string, age: number) => {
  return `${name}さんは${age}歳です`;
};
type Hoge4 = Parameters<typeof createMessage>;

// const foo: Hoge4 = [22, "Mark"];//エラー
const bar: Hoge4 = ["Mark", 22];
console.log(bar);

const stringFunction2 = (arg: string) => {
  console.log(arg);
};
type ParametersStringFunction = Parameters<typeof stringFunction2>;
const parametersStringFunction: ParametersStringFunction = [
  "How have you been?",
];
console.log(parametersStringFunction);

const multipleFunction = (arg1: number, arg2: boolean) => {
  console.log(arg1);
  console.log(arg2);
};

type ParametersMultipleFunction = Parameters<typeof multipleFunction>;
const parametersMultipleFunction: ParametersMultipleFunction = [1, true];
console.log(parametersMultipleFunction);

//====================================================================
// ReturnType
//====================================================================
//関数の戻り値の型を取得することできる
const fullName = (last: string, first: string): string => `${last} ${first}`;
type Hoge5 = ReturnType<typeof fullName>;

const bar2: Hoge5 = "bar";
console.log(bar2);

const stringFunction3 = () => {
  return "Hey!";
};
type ReturnTypeStringFunction = ReturnType<typeof stringFunction3>;
const returnTypeStringFunction: ReturnTypeStringFunction = "Look!";
console.log(returnTypeStringFunction);

const multipleFunction2 = () => {
  return [7, false];
};
type ReturnTypeMultipleFunction = ReturnType<typeof multipleFunction2>;
const returnTypeMultipleFunction: ReturnTypeMultipleFunction = [59, 55];
console.log(returnTypeMultipleFunction);

const userFunction = (user: { name: string; age: number }) => {
  return user;
};
type UserFunction = Parameters<typeof userFunction>[0];
const user15: UserFunction = {
  name: "Mark",
  age: 41,
};
console.log(user15);

const userFunction2 = () => {
  return {
    id: 8,
    name: "Jane",
  };
};
type UserFunction2 = ReturnType<typeof userFunction2>;
type ReadonlyUserFunction2 = Readonly<UserFunction2>;
const user16: ReadonlyUserFunction2 = {
  id: 17,
  name: "Carl",
};
console.log(user16);
