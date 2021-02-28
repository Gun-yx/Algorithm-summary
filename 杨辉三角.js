var generate = function(numRows) {
    if(numRows == 0){
        return []
    }else{ 
        //先建立二维数组，经验证明，直接建好了长度已定的数组再改值比建个空数组再push值要快
        let arr = new Array(numRows)
        for(let i = 0;i<numRows;++i){
            arr[i] = new Array(i+1)
        }
        //赋值第一个值
        arr[0][0] = 1
        for(let i = 1;i<numRows;++i){
            for(let j = 0;j<arr[i].length;++j){
                //遍历行列，如果左上角和右上角都有数则加起来
                if(arr[i-1][j-1] && arr[i-1][j]){
                    arr[i][j] = arr[i-1][j-1]+arr[i-1][j]
                }else{
                    //否则有一个的情况，不会出现两个都没有的情况，只有arr[0][0]如此，已赋值
                    arr[i][j] = arr[i-1][j-1]?arr[i-1][j-1]:arr[i-1][j]
                }
            }
        }
        return arr
    }
};