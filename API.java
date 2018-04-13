import java.util.*;
import java.net.*;
public class API {

	private String name;
	private URL url;
	private ArrayList<String> tags;

	public API(String name, String stringURL, ArrayList tags){
		try{
			this.name = name;
			this.url = new URL(stringURL);
			this.tags = new ArrayList<String>(tags);
		} catch (MalformedURLException me) {
			System.err.println("Error on creating the URL");
		}
	}

	public String getName(){ return this.name; }
	public void setName(String newAPIname){ this.name = newAPIname;}
	public URL getUrl(){ return this.url; }
	public void setURL(String newURL){ 
		try{ 
			this.url = new URL(newURL);
		} catch (MalformedURLException me) {
				System.err.println("Error on setting the URL");
		}
	}
	public ArrayList<String> getTags(){ return this.tags; }
	public void setTags(ArrayList<String> newTags){ this.tags = new ArrayList<String>(tags); }
	}