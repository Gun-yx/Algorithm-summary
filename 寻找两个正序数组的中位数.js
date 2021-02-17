var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums.length , len2 = nums2.length;
    if(len1 > len2){
        return findMedianSortedArrays(nums2,nums1)
    } 
    let len = len1 + len2;
    let start = 0, end = len1;
    let partLen1,partLen2;
    while(start <= end){
        partLen1 = (start + end)>> 1
        partLen2 = ((len + 1)>>1) - partLen1;

        let L1 = partLen1===0 ? -Infinity : nums[partLen1 -1];
        let L2 = partLen2===0 ? -Infinity : nums[partLen2 -1];

        letR1 = partLen1===Len1?Infinity : nums[partLen1]
        letR2 = partLen2===Len2?Infinity : nums[partLen2]
        
        if(L1 > R2){
            end = partLen1 - 1;
        }else if (L2 > R1){
            start = partLen1 + 1;
        }else{
            return len % 2 === 0?
            (Math,max(L1,L2) + Math.min(R1,R2));
            Math.max(L1,L2)
        }
    }

};