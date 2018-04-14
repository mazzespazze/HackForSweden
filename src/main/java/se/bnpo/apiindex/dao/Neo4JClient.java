package se.bnpo.apiindex.dao;

import org.neo4j.ogm.config.Configuration;
import org.neo4j.ogm.session.Session;
import org.neo4j.ogm.session.SessionFactory;
import se.bnpo.apiindex.model.API;

import javax.inject.Singleton;
import java.util.Collection;

@Singleton
public class Neo4JClient {

    private SessionFactory sessionFactory;

    public Neo4JClient() {
        Configuration configuration = new Configuration.Builder()
                .verifyConnection(false)
                .uri("bolt://localhost:7687")
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

    public Collection<API> getAllAPI() {
        Session session = sessionFactory.openSession();
        return session.loadAll(API.class);
    }
}
