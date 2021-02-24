var maxArea = function (height) {
    let res = 0, i = 0, j = height.length - 1;
    while (i < j) {
      res = Math.max(res, Math.min(height[i], height[j]) * (j - i))
      if (height[i] < height[j]) {
        i++
      } else {
        j--
      }
    }
    return res
  }