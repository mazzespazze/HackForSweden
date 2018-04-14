package se.bnpo.apiindex.dao;

import org.neo4j.ogm.config.Configuration;
import org.neo4j.ogm.session.Session;
import org.neo4j.ogm.session.SessionFactory;
import se.bnpo.apiindex.model.API;
import se.bnpo.apiindex.model.Tag;

import javax.inject.Singleton;
import java.util.*;

@Singleton
public class Neo4JClient {

    private SessionFactory sessionFactory;

    public Neo4JClient() {
        String url = System.getenv("DB_URL");
        Configuration configuration = new Configuration.Builder()
                .verifyConnection(false)
                .uri("bolt://" + (url != null ? url : "localhost") + ":7687")
                .build();
        sessionFactory = new SessionFactory(configuration, "se.bnpo.apiindex.model");
    }

    public void cleanDB() {

        getAllAPI().forEach(api -> {
            Session session = sessionFactory.openSession();
            session.beginTransaction();
            session.delete(api);
            session.getTransaction().commit();
        });
    }

    public void addAPI(API api) {
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        session.save(api);
        session.getTransaction().commit();
    }

    public Collection<Tag> getAllTags() {
        Session session = sessionFactory.openSession();
        return session.loadAll(Tag.class);
    }

    public List<API> getPath(String startTag, String endTag) {
        Session session = sessionFactory.openSession();
        Map<String, String> param = new HashMap<>();
        param.put("start", startTag);
        param.put("end", endTag);
        List<API> result = new ArrayList<>();
        session.query(API.class, "MATCH (n:Tag {name: $start}),(m:Tag {name: $end}), \n" +
                "p = shortestPath((n)-[*..15]-(m))\n" +
                "WITH NODES(p) AS nds\n" +
                "UNWIND nds AS nd\n" +
                "WITH nd\n" +
                "WHERE nd:api\n" +
                "RETURN nd;", param).forEach(result::add);
        return result;
    }

    public Collection<Tag> getReachableTags(String tagName) {
        Session session = sessionFactory.openSession();
        Map<String, String> param = new HashMap<>();
        param.put("name", tagName);
        List<Tag> result = new ArrayList<>();
        session.query(Tag.class, "MATCH (n:Tag {name: $name})-[*..15]-(m:Tag) RETURN m", param).forEach(result::add);
        return result;
    }

    public Collection<API> getAPIWithTag(String tagName) {
        Session session = sessionFactory.openSession();
        Map<String, String> param = new HashMap<>();
        param.put("name", tagName);
        List<API> result = new ArrayList<>();
        session.query(API.class, "MATCH(n)-[r]-(b {name: $name}) RETURN n", param).forEach(result::add);
        return result;
    }

    public Collection<API> getAllAPI() {
        Session session = sessionFactory.openSession();
        return session.loadAll(API.class);
    }
}
