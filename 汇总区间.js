var summaryRanges = function(nums) {
    if (!nums.length) return []
    let start = nums[0]
    let res = []
    for(let i = 1; i <= nums.length; i++){
        if (nums[i - 1] !== nums[i] - 1) {
            let str = start !== nums[i - 1] ? start + '->' + nums[i - 1] : start + ''
            res.push( str )
            start = nums[i]
        }
    }
    return res
};