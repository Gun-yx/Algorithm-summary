function isPalindrome (x) {
    var str=x.toString();
    if((str.split('').reverse().join(''))===str){
        return true;
    }else{
        return false;
    }
};