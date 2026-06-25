public class FactoryMethodTest {

    public static void main(String[] args) {

        DocumentFactory word = new WordFactory();
        DocumentFactory pdf = new PdfFactory();
        DocumentFactory excel = new ExcelFactory();

        word.create();
        pdf.create();
        excel.create();
    }
}