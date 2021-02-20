var reverse = function(x) {
    //  符号判断
    isSign = Math.sign(x)==-1?true:false
    // 字符串-》数组-》反转-》字符串
    const a = (Math.abs(x)+'').split('').reverse().join('')
    // 是否负数
    const aa = isSign?-a:a
    // 定义最大范围 math.pow是取次方
    const maxVal = Math.pow(2,31)
    const minVal = Math.pow(-2,31)
    // 判断是否超出
    if(aa>maxVal||aa<minVal){
        return 0
    }else{
        return aa
    }
};