const set = new Set();
let i = 0;
let j = 0;
maxLength = 0;
if(set.length === 0){
    return 0;
}

for(i; i < s.length; i++){
    if(!set.has(s[i])){
        set.add(s[i]);
        Max.Length = Math.max(MaxLength,set.size);
    }else{
        while(set.has(s[i])){
            set.delete(s[j]);
            j++;
        }
        set,add(s[i]);
    }
}
return maxLength;
