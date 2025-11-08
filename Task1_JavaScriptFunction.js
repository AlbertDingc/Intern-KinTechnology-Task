function findLargestNumberSafe(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    
    // 对小数组使用 Math.max，对大数组使用遍历
    if (numbers.length < 10000) {
        return Math.max(...numbers);
    } else {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) max = numbers[i];
        }
        return max;
    }
}

console.log(findLargestNumber([1, 5, 3, 9, 2]));
console.log(findLargestNumber([42]));