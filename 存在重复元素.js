//本题需解决的是去除重复元素的问题
/*
本题有两种解法：
    1.利用ES6中的新属性set解决此类问题
    原理：set会自动删除存在其内部的重复元素，至需要将数组转换为set，问题就迎刃而解了*/
var containsDuplicate = function(nums) {
    return nums.length!==new Set(nums).size
};

//2.哈希表求解
var containsDuplicate = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};