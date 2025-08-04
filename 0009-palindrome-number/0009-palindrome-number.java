class Solution {
    public boolean isPalindrome(int x) {
        int revValue=0;
        int orgValue=x;

        while(x>0){
            int digit = x%10;
            x = x/10;
            revValue = (revValue*10)+digit;
        }

        if(orgValue == revValue){
            return true;
        }

        return false;
    }
}