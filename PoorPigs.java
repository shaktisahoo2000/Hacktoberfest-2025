class Solution {
    public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        // trivial
        if (buckets <= 1) return 0;

        int tests = minutesToTest / minutesToDie; 
        if (tests == 0) return Integer.MAX_VALUE;

        long states = tests + 1L; 
        long ways = 1L;
        int pigs = 0;

        
        while (ways < buckets) {
            pigs++;
            ways *= states;
           
        }

        return pigs;
    }
}
