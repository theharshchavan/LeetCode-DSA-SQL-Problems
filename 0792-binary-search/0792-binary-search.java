class Solution {
    public int search(int[] nums, int target) {
        int start=0, end=nums.length;
        for(int i=0; i<nums.length ; i++){
            int mid=(start+end)/2;
            if(nums[mid]==target){
                return mid;
            }
            else if(nums[mid]>target){
                end=mid;
            }
            else if(nums[mid]<target){
                start=mid;
            }
        }
        return -1;
    }
}