export function findSumOfThree(nums: number[], target: number) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      const triple = nums[i] + nums[low] + nums[high];
      if (triple === target) {
        return true;
      }

      if (triple > target) {
        high--;
      } else {
        low++;
      }
    }
  }

  return false;
}
