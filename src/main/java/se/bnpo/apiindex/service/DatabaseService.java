package se.bnpo.apiindex.service;

import se.bnpo.apiindex.dao.Neo4JClient;
import se.bnpo.apiindex.model.API;
import se.bnpo.apiindex.model.Tag;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Collection;

@Singleton
public class DatabaseService {
    @Inject
    private Neo4JClient neo4JClient;

    public Collection<Tag> getReachable(String tag) {
        return neo4JClient.getReachableTags(tag);
    }

    public Collection<Object> getPath(String start, String end) {
        return neo4JClient.getPath(start, end);
    }

    public Collection<API> getAPIsWithTag(String tag) {
        return neo4JClient.getAPIWithTag(tag);
    }

    public Collection<API> getAPIs() {
        return neo4JClient.getAllAPI();
    }

    public Collection<Tag> getTags() {
        return neo4JClient.getAllTags();
    }

    public void addAPI(API api) {
        neo4JClient.addAPI(api);
    }

    public void cleanDB() {
        neo4JClient.cleanDB();
    }
}
