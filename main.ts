// 1 masala
// let son: number[] = [45, 60, 75, 30, 90, 55, 80];
// let sum = 0;
// let count = 0;
// for (let a of son) {
//   if (a >= 60) {
//     sum += a;
//     count++;
//   }
// }console.log(count ? sum / count : 0);

// 2 masala
// let users: string[] = ["Umarali", "", "Maxsuma", "Umar", ""];
// let result: string = users
//   .map((n) => n.trim())
//   .filter((n) => n !== "")
//   .join(",");
// console.log(result);

// 3 masala
// type Person = { name: string; age: number };
// let people: Person[] = [
//   { name: "Ali", age: 17 },
//   { name: "Umarali", age: 22 },
//   { name: "Hasan", age: 18 },
// ];
// let result: string[] = people.filter((p) => p.age >= 18).map((p) => p.name);
// console.log(result);

// 4 masala
// let products = [
//   { title: "Telefon", price: 1000 },
//   { title: "Noutbuk", price: 3500 },
//   { title: "Quloqchin", price: 300 }
// ];
// let result = products.reduce((a, b) => a + b.price, 0);
// console.log(result);

// 5 masala
// let users = [
//   { id: 1, isActive: false },
//   { id: 2, isActive: false },
//   { id: 3, isActive: true }
// ];
// let result = users.some(u => u.isActive);
// console.log(result);

// 6 masala
// let items = [
//   { id: 1, tags: ["ism", "kimdur"] },
//   { id: 2, tags: ["mimadur", "qayerda"] },
// ];
// let result = [...new Set(items.flatMap(i => i.tags))];
// console.log(result);

// 7 chi masala
// let obj: Record<string, number> = { a: 10, b: 30, c: 20 };
// let Key = "";
// for (let k in obj) if (!Key || obj[k] > obj[Key]) Key = k;
// console.log(Key);

// 8 masala
// const students = [
//   { name: "Umarali", scores: [80, 90, 70] },
//   { name: "Maxsuma", scores: [60, 75, 85] },
//   { name: "Munisa", scores: [68, 76, 80] },
// ];
// let result = students.map((s) => ({
//   name: s.name,
//   avg: s.scores.reduce((a, b) => a + b, 0) / s.scores.length,
// }));
// console.log(result);

// 10 masala
// let users = [
//   { id: 1, name: "ifora" },
//   { id: 2, name: "Mushtariy" },
//   { id: 3, name: "Yasmena" },
// ];
// let id = [1, 3];
// let result = users.filter((u) => id.includes(u.id));
// console.log(result);
