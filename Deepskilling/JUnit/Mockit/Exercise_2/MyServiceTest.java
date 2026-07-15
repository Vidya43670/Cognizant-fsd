import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Create service using the mock object
        MyService service = new MyService(mockApi);

        // Call the method
        service.fetchData();

        // Verify that getData() was called
        verify(mockApi).getData();
    }
}