var twoSum = function (numbers, target) {
    let left = 0,
      right = numbers.length - 1
    while (left < right) {
      // 当两个指针对应的元素和等于 target直接返回
      if (numbers[left] + numbers[right] === target) {
        return [left + 1, right + 1]
      } else if (numbers[left] + numbers[right] > target) {
        // 当和大于target，则右侧减小(较大的值减小)
        right--
      } else {
        // 当和小于target，则左侧增大(较小的值增大)
        left++
      }
    }
  }