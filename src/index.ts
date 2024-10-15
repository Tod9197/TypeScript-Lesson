import { info, log } from "console";

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
