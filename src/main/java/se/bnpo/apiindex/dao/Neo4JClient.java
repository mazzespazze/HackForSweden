package se.bnpo.apiindex.dao;

import org.neo4j.driver.v1.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.neo4j.driver.v1.Values.parameters;

public class Neo4JClient implements AutoCloseable {

    private final Driver driver;

    public Neo4JClient()
    {
        driver = GraphDatabase.driver("bolt://localhost:7687", AuthTokens.basic("", ""));
    }

    @Override
    public void close() {
        driver.close();
    }

    public void addDataSet() {
        try ( Session session = driver.session() ) {
            List<String> tags = new ArrayList<>();
            String tagString = tags.stream().collect(Collectors.joining());
            StringBuilder queryBuilder = new StringBuilder("CREATE (a:").append(tagString).append(") ");
            queryBuilder.append("SET a.api = $api");
            queryBuilder.append("RETURN a.api + ', from node ' + id(a)");
            session.writeTransaction(tx -> {
                StatementResult result = tx.run(queryBuilder.toString(),
                                                parameters( "api", "flight" ) );
                return result.single().get( 0 ).asString();
            });
        }
    }
}
