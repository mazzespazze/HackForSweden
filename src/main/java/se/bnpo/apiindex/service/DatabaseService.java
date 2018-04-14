package se.bnpo.apiindex.service;

import se.bnpo.apiindex.dao.Neo4JClient;
import se.bnpo.apiindex.model.API;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Collection;

@Singleton
public class DatabaseService {
    @Inject
    private Neo4JClient neo4JClient;

    public Collection<API> getAPIs() {
        return neo4JClient.getAllAPI();
    }

    public void addAPI(API api) {
        neo4JClient.addAPI(api);
    }

    public void cleanDB() {
        neo4JClient.cleanDB();
    }
}
