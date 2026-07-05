public class BinarySearch {

    public static int search(Product arr[], String key){

        int low=0;
        int high=arr.length-1;

        while(low<=high){

            int mid=(low+high)/2;

            int result=arr[mid].name.compareToIgnoreCase(key);

            if(result==0)
                return mid;

            else if(result<0)
                low=mid+1;

            else
                high=mid-1;
        }

        return -1;
    }
}