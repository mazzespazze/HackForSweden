package se.bnpo.apiindex;

import org.neo4j.driver.v1.*;

import static org.neo4j.driver.v1.Values.parameters;

public class Main implements AutoCloseable {
    private final Driver driver;

    public Main( String uri, String user, String password )
    {
        driver = GraphDatabase.driver(uri, AuthTokens.basic(user, password ) );
    }

    @Override
    public void close() throws Exception
    {
        driver.close();
    }

    public void printGreeting( final String message )
    {
        try ( Session session = driver.session() )
        {
            session.writeTransaction(tx -> {
                StatementResult result = tx.run( "CREATE (a:CO2:flight) " +
                                                         "SET a.api = $api " +
                                                         "SET a.url = $url " +
                                                         "RETURN a.api + ', from node ' + id(a)",
                                                 parameters( "api", "flight" ) );
                return result.single().get( 0 ).asString();
            });
            session.writeTransaction(tx -> {
                StatementResult result = tx.run( "CREATE (a:CO2:food) " +
                                                         "SET a.api = $api " +
                                                         "RETURN a.api + ', from node ' + id(a)",
                                                 parameters( "api", "food" ) );
                return result.single().get( 0 ).asString();
            });
            session.writeTransaction(tx -> {
                StatementResult result = tx.run( "MATCH (a:flight),(b:food)\n" +
                                                         "CREATE (a)-[r:RELTYPE]->(b)\n" +
                                                         "RETURN type(r)");
                return result.single().get( 0 ).asString();
            });
        }
    }

    public static void main( String... args ) throws Exception
    {
        try ( Main greeter = new Main( "bolt://localhost:7687", "", "" ) )
        {
            greeter.printGreeting( "hello, world" );
        }
    }
}
