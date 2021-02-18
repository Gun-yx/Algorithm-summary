var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let row = 0;
    let down = Boolean(false);
    const res = Array(numRows).fill("");
    for (let i = 0; i < s.length; i++) {
        res[row] += s[i];
        if (row === 0 || row === numRows - 1) {
            down = !down;
        }
        if (down) {
            row++;
        } else {
            row--;
        }
    }
    return res.reduce((pre, cur) => pre + cur);
};