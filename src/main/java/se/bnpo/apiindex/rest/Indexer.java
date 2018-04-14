package se.bnpo.apiindex.rest;


import se.bnpo.apiindex.service.DatabaseService;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/index")
@ApplicationScoped
public class Indexer {
    @Inject
    private DatabaseService databaseService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/api")
    public Response getAPIList(@QueryParam("tag") String tags) {
        return Response.ok(databaseService.getAPIs()).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/api/{id}")
    public Response getAPIWithTag(@PathParam("id") String tag) {
        return Response.ok(databaseService.getAPIsWithTag(tag)).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/tag")
    public Response getTagList() {
        return Response.ok(databaseService.getTags()).build();
    }
}
