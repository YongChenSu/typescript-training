// 定義一個函式，接受一個數字的陣列，計算數字加總的結果並回傳
function sum(arr) {
    var total = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        total += i;
    }
    return total;
}
console.log('sum:', sum([1, 2, 3, 4, 5]));
function calculate(nums) {
    var total = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
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
