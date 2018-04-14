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
    @Path("/tag/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getReachable(@PathParam("id") String tag) {
        return Response.ok(databaseService.getReachable(tag)).build();
    }

    @GET
    @Path("/path/{start}/{end}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPath(@PathParam("start") String start, @PathParam("end") String end) {
        return Response.ok(databaseService.getPath(start, end)).build();
    }

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
