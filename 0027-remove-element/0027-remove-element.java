class Solution {
    public int removeElement(int[] nums, int val) {
        int k=0;
        if(nums.length == 0){
            return 0;
        }

        for(int i=0 ; i<nums.length ; i++){
            if(val != nums[i]){
                int temp = nums[i];
                nums[k]=temp;
                k++;
            }
        }
       
        return k;
    }
}