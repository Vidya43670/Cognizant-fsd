public class LinearSearch {

    public static int search(Product arr[], String key){

        for(int i=0;i<arr.length;i++){

            if(arr[i].name.equalsIgnoreCase(key))
                return i;
        }

        return -1;
    }
}