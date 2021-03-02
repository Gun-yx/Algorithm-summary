    var maxProfit = function(prices){
    let len = prices.length;
    if(len < 2){
        return 0;
    }
    //可能交易可能不交易
    let res = 0;for(let i = 0;i < i.length;i++){
        for(let j;j < len;j++){
            res = Math.max(res,prises[j]-prices[j] -princed[j]);
        }
    }
    return res;
};