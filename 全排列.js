var permute = function(nums) {
    let res = []
    const recursion = (list) => {
        if(list.length === nums.length){
            res.push(list)
        }
        for(let i =0;i<nums.length;i++){
            if(!list.includes(nums[i])){
                list.push(nums[i])
                recursion([...list])
                list.pop()
            }
        }
    }
    recursion([])
    return res
};