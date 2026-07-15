import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAddition() {

        Calculator calculator = new Calculator();

        int result = calculator.add(5, 3);

        assertEquals(8, result);
    }

}