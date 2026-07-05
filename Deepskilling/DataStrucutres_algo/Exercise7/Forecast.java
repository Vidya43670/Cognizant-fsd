public class Forecast {

    static double futureValue(double current,int years,double growth){

        if(years==0)
            return current;

        return futureValue(current,years-1,growth)*(1+growth);
    }

    public static void main(String args[]){

        double amount=futureValue(10000,5,0.10);

        System.out.println("Future Value = "+amount);
    }
}