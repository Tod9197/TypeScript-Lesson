"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello = function (name) {
    return "Hello\u3001".concat(name, "!!");
};
console.log(hello("Tod"));
//===================================================
// Object型 interface
//===================================================
//1. オブジェクトの各プロパティ毎に型を定義
var person = {
    name: "Taro",
    age: 20,
};
console.log(person);
var person2 = {
    name: "Akira",
    age: 35,
};
console.log(person2);
var data = { text: "テキスト", id: 1 };
console.log(data);
var objectSample = { name: "David", age: 33 };
console.log(objectSample);
//===================================================
// Array型
//===================================================
var animals = ["Dog", "Cat", "Bird"];
var numbers = [1, 2, 3];
var fruits = ["banana", "grape", "apple"];
var arraySample = ["りんご", "みかん", "ブドウ"];
var animals2 = ["Horse", "Bear", "Tiger"];
var numbers2 = [100, 200, 300];
var arraySample2 = ["京都", "大阪", "兵庫"];
var people = ["太郎", "次郎", "三郎"];
//===================================================
//Union型
//===================================================
//変数や配列に複数の型を指定できる
//型を指定する時は「|(バーティカルライン)」を使用して列挙する
var something = 5;
something = "文字列の値";
var array = ["Apple", 20, "Banana", 25, "Orange"];
var printLength = function (input) {
    if (typeof input === "string") {
        console.log("\u6587\u5B57\u5217\u306E\u9577\u3055: ".concat(input.length));
    }
    else {
        console.log("\u6570\u5024\u306E\u5217:".concat(input));
    }
};
printLength("Hello");
printLength(15);
var something2 = true;
var UnionSample = "数値を入れることもできます";
console.log(UnionSample);
UnionSample = 258;
console.log(UnionSample);
var idSample = 789;
console.log(idSample);
var ProfileSample = {
    name: "Gordon",
    age: 51,
};
console.log(ProfileSample);
var fruitsList = ["スイカ", "メロン", "マンゴー"];
console.log(fruitsList);
var newCustomer = {
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
var sum = function (num1, num2) {
    return num1 + num2;
};
//引数に1つの数値を受け取り2倍した値を返す関数
var double = function (num) {
    return num * 2;
};
console.log(double(3));
var taxCulc = function (num) {
    return num * 1.1;
};
console.log(taxCulc(3300));
var testFunction = function (word) {
    return !word;
};
var trippleNumber = function (sampleNumber) {
    console.log(sampleNumber * 3);
};
trippleNumber(768);
var stringFunction = function (stringSample) {
    console.log(stringSample.toUpperCase());
};
stringFunction("react");
//===================================================
//any型
//===================================================
//通常のJavaScriptの変数と同様に文字列・数値・配列・オブジェクト等を自由に代入可能な変数を宣言できる
//any型以外の型で宣言した変数に、any型の変数を代入すると値だけでなく型も上書きされるため基本的には使用を避ける
var everything = true;
everything = "hello";
everything = ["hello", 25, false];
everything = {};
var anything = [true, false];
var something3 = "hello";
var anything2 = 0;
something3 = anything2;
console.log(something3);
var student1 = {
    name: "Jhon",
    age: 16,
    gender: "male",
    club: "baseball",
};
var student2 = {
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
var name = "Jim";
var nameLength = name.length;
//<>を使った型アサーションの書き方
var name2 = "Gave";
var nameLength2 = name.length;
//ユニオン型の値をstring型に型アサーションを行う
var name3 = "Tom";
var upperCaseName = name3.toUpperCase();
console.log(upperCaseName);
var sampleValue = {};
sampleValue.text = "テキスト";
var text = "hello world";
var textLength = text.length;
console.log(textLength);
var numberValue = 123;
var stringValue = "abc";
numberValue = stringValue;
console.log(numberValue);
var numberFunction = function (input) {
    var word = "abc";
    word = input;
};
numberFunction(234);
var objectValue = {};
objectValue.count = 10;
console.log(objectValue.count);
var getLowerCase = function (input) {
    var lowerCase = input.toLowerCase();
    console.log(lowerCase);
};
getLowerCase("NIKE");
//===================================================
// ?(optional chaining)
//===================================================
//undefinedかnullの可能性があるプロパティにアクセスしようとした際にエラーを防ぐことができる
var sampleFunction = function (user) {
    var _a;
    console.log((_a = user.name) === null || _a === void 0 ? void 0 : _a.value);
};
sampleFunction({ age: 20 });
//===================================================
// ?(optional parameter)
//===================================================
//オプション引数(optional parameter)は引数に?をつけることで引数を省略することができる
var numberFunction2 = function (count) {
    if (typeof count === "number") {
        console.log(count * 2);
    }
    else {
        console.log(count);
    }
};
numberFunction2(12);
numberFunction2();
