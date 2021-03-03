var majorityElement = function(nums) {
    //创建一个map
    let map = new Map()
     //循环数组
    for(let i = 0;i<nums.length;i++){
        //如果map中不存在这个元素
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            //如果map中存在这个元素
            map.set(nums[i], 1)
        }
    }
    //再遍历一遍map
    for(let item of map.entries()){
        if(item[1]>nums.length/2){
            //返回键名
            return item[0]
        }
    }
}
