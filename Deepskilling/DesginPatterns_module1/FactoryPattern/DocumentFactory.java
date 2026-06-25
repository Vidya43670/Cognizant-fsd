abstract class DocumentFactory {

    abstract Document createDocument();

    public void create() {
        Document document = createDocument();
        document.open();
    }
}