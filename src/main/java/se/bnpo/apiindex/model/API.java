package se.bnpo.apiindex.model;

import org.neo4j.ogm.annotation.*;

import java.util.List;

@NodeEntity(label = "api")
public class API {
    @Id
    @GeneratedValue
    Long id;

    @Property(name="name")
    private String name;
    @Property(name="url")
    private String url;

    @Relationship(type="Tag")
    private List<Tag> tags;
    @Property(name="desc")
    private String desc;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }
}
