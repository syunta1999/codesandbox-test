// var vall = "関数";
// console.log(vall);

// vall = "上書き";
// console.log(vall);

// var vall = "再宣言";
// console.log(vall);

// let vall = "let変数";
// console.log(vall);

// vall = "let上書き";
// console.log(vall);

// let vall = "再宣言不可";

// const vall = {
//   name: "name",
//   age: "10"
// };
// vall.name = "nam";
// console.log(vall);

// const vall = ["dog", "cat"];
// vall[0] = "bird";
// vall.push("monky");
// console.log(vall);

// const name = "name";
// const age = 22;

// const message = "私の名前は" + name + age + "です";
// console.log(message);

// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// const func4 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));
// console.log(func4(10, 30));

// const myProfile = {
//   name: "bob",
//   age: 28
// };

// const message1 = `Name is ${myProfile.name}. My age is ${myProfile.age}.`;
// console.log(message1);

// const { name, age } = myProfile; // 抜き出すことで宣言内容を減らせる
// const message2 = `a${name}, a${age}`;
// console.log(message2);
// const pyProfile = ["bon", 22];
// const message3 = `nameis ${pyProfile[0]}, ${pyProfile[1]}`;
// console.log(message3);

// const [name, age] = pyProfile;
// const message4 = `${name}, ${age}`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

// スプレット構文

// const all = [1, 2];
// console.log(all); //配列全体
// console.log(...all); // 配列のみ表示

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(all[0], all[1]);
// sumFunc(...all); //すべて選択

//配列の展開
// const all = [1, 2, 3, 4, 5];
// const [num1, num2, ...all3] = all;
// console.log(num1);
// console.log(num2);
// console.log(...all3);

//配列のコピー、結合
// const all = [10, 30];
// const all1 = [20, 40];

// const all2 = [...all];
// all2[0] = 100;
// console.log(all2);
// console.log(all);

// const all3 = [...all1];
// console.log(all3);

// const all8 = all1;
// all8[0] = 100;
// console.log(all1);
// const nameall = ["tanka", "yamada", "sato"];
// for (let index = 0; index < nameall.length; index++) {
//   console.log(`${index + 1}番目は${nameall[index]}です`);
// }

// for (let index = 0; index < nameall.length; index++) {
//   console.log(nameall[index]);
// }

// const nameall2 = nameall.map((name) => {
//   return name;
// });
// console.log(nameall2);
//  map関数の場合,二つ目の引数は指定しないと自動で数字が入る
// nameall.map((name, index) => console.log(`${index + 1}は${name}です`));

// const numall = [1, 2, 3, 4, 5];
// const newnum = numall.filter((num) => {
//   return num % 2 === 1; // 2で割った値が1になるものだけ返す
// });
// console.log(newnum);

// const newname = nameall.map((name) => {
//   if (name === `sato`) {
//     return `${name}かよ`;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newname);

// 三項演算子

// const vall = 1 < 0 ? "trueです" : "falseです";
// console.log(vall);

// const num = 1300;
// console.log(num.toLocaleString());

// const formatte =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatte);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えて言う" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtureになります");
// }
// if (flag1 && flag2) {
//   console.log("１も２もtureになります");
// }

// \\ は左がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す。
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
