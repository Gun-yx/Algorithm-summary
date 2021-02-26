//解题思路
//1.加一：
//      情况一：数字为9
//      情况二：数字不为9
//      情况三：连续进位至四位数

var plusOne = function(digits) {
    // 数组最后一位直接先加一
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    // 加一后，数组是否需要扩容？
    let expansion = false;
    // 反序遍历
    for (let i = digits.length - 1; i >= 0; i--) {
        // 存在进位的情况
        if (digits[i] > 9) {
            // 仅当 i 大于 0 时，代表当前数前面还存在元素
            if(i > 0){
                digits[i - 1] = digits[i - 1] + digits[i] - 9;
            }
            // 若 i 为 0，代表当前数组需要扩容
            // 若需要扩容，数组第一位数字，一定是 1
            else expansion = true;
            // 当前位取进位后的末位
            digits[i] = digits[i] % 10;
        }
    }
    // 检查是否扩容
    if(expansion) digits.unshift(1);
    return digits;
};