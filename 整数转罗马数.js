var intToRoman = function(num) {
    var Q = ["", "M", "MM", "MMM"];
    var B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return Q[Math.floor(num/1000)] + B[Math.floor((num%1000)/100)] + S[Math.floor((num%100)/10)] + G[num%10];
};