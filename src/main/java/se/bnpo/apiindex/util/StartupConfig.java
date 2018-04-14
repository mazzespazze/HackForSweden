package se.bnpo.apiindex.util;

import se.bnpo.apiindex.model.API;
import se.bnpo.apiindex.model.Tag;
import se.bnpo.apiindex.service.DatabaseService;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;
import java.util.Collections;

@Startup
@Singleton
public class StartupConfig {
    @Inject
    private DatabaseService databaseService;

    @PostConstruct
    public void init() {
        databaseService.cleanDB();

        Tag tag = new Tag();
        tag.setName("CO2");

        API api = new API();
        api.setName("Flyg");
        api.setUrl("google.com");
        api.setDesc("Flight api or some shit");
        api.setTags(Collections.singletonList(tag));

        databaseService.addAPI(api);
    }
}
