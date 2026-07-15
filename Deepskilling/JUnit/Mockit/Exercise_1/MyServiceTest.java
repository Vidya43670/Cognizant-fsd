import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Create service using mock object
        MyService service = new MyService(mockApi);

        // Call the method
        String result = service.fetchData();

        // Verify the result
        assertEquals("Mock Data", result);
    }
}