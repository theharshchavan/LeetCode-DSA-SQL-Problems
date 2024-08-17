class Solution {
    public boolean containsDuplicate(int[] nums) {
        // for (int i = 0; i < nums.length; i++) {
        // for (int j = i+1; j < nums.length; j++) {
        // if (nums[i] > nums[j]) {
        // int temp = nums[j];
        // nums[j]=nums[i];
        // nums[i]=temp;
        // }
        // }
        // }

        // for (int i = 0; i < nums.length-1; i++) {
        // if (nums[i] == nums[i + 1]) {
        // return true;
        // }
        // }
        // return false;

        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}