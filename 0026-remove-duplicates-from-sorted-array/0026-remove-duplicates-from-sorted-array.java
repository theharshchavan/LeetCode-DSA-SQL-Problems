class Solution {
    public int removeDuplicates(int[] nums) {
        int n=1;
        int temp=nums[0];
        if(nums.length==0){
            return 0;
        }

        for(int i=0 ; i<nums.length ; i++){
            if(temp!=nums[i]){
                nums[n]=nums[i];
                n++;
                temp=nums[i];
            }
        }
        return n;
    }
}