package se.bnpo.apiindex.util;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import se.bnpo.apiindex.model.API;
import se.bnpo.apiindex.model.Tag;
import se.bnpo.apiindex.model.dto.APIDTO;
import se.bnpo.apiindex.service.DatabaseService;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;
import java.io.File;
import java.io.FileNotFoundException;
import java.net.URISyntaxException;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

@Startup
@Singleton
public class StartupConfig {
    @Inject
    private DatabaseService databaseService;

    @PostConstruct
    public void init() {
        databaseService.cleanDB();
        try {
            String json = new Scanner(
                    new File(this.getClass().getClassLoader().getResource("api.json").toURI())).useDelimiter("\\Z")
                                                                                               .next();
            List<APIDTO> apiDTOs = new Gson().fromJson(json, new TypeToken<List<APIDTO>>() {
            }.getType());
            apiDTOs.stream().map(dto -> {
                API api = new API();
                api.setDesc(dto.getDesc());
                api.setUrl(dto.getUrl());
                api.setName(dto.getName());
                api.setTags(dto.getTags().stream().map(name -> {
                    Tag tag = new Tag();
                    tag.setName(name);
                    return tag;
                }).collect(Collectors.toList()));
                return api;
            }).forEach(api -> databaseService.addAPI(api));
        } catch (FileNotFoundException | URISyntaxException e) {
            e.printStackTrace();
        }
    }
}
