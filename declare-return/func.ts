// 定義一個函式，接受一個數字的陣列，計算數字加總的結果並回傳
function sum(arr: Array<number>): number {
	let total:number = 0;
	for (const i of arr) {
		total += i;
	}
	return total;
}

console.log('sum:', sum([1, 2, 3, 4, 5]));

function calculate(nums:number[]): number {
	let total:number = 0;
	for (const i of nums) {
		total += i;
	}
	return total;
}

console.log('calculate:', calculate([1, 2, 3, 4, 5]));

// function add(n1: number, n2:number): number {
// 	return n1+n2
// }

// const ans: number=add(5,6)
// console.log(ans)


// function show(msg: string) {
// 	return msg;
// }

// show('5')