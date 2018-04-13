import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import com.google.gson.Gson;
    // Getters and setters are not required for this example.
import com.google.gson.GsonBuilder;

public class MockExample {
    private String name;
    private String url;
    private String tags;
    private String desc;

    // Getters and setters are not required for this example.
    // GSON sets the fields directly using reflection.


    // methods

    @Override
    public String toString() {
        return name + " - " + tags + " - " + url;
    }
}

public class JsonToJava {

    public static void main(String[] args) throws IOException {
        try(Reader reader = new InputStreamReader(JsonToJava.class.getResourceAsStream("/MockExample.json"), "UTF-8")){
            Gson gson = new GsonBuilder().create();
            Person p = gson.fromJson(reader, MockExample.class);
            System.out.println(p);
        }
    }
}