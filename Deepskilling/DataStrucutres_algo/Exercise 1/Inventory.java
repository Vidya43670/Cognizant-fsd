import java.util.HashMap;

public class Inventory {

    static HashMap<Integer, Product> inventory = new HashMap<>();

    public static void addProduct(Product p) {
        inventory.put(p.productId, p);
    }

    public static void updateProduct(int id, int quantity, double price) {

        if (inventory.containsKey(id)) {

            Product p = inventory.get(id);
            p.quantity = quantity;
            p.price = price;
        }
    }

    public static void deleteProduct(int id) {
        inventory.remove(id);
    }

    public static void display() {

        for(Product p : inventory.values())
            System.out.println(p);
    }

    public static void main(String args[]) {

        addProduct(new Product(101,"Laptop",20,55000));

        addProduct(new Product(102,"Mouse",50,500));

        updateProduct(101,25,53000);

        deleteProduct(102);

        display();
    }
}