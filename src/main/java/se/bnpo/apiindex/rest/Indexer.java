package se.bnpo.apiindex.rest;


import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/index")
@ApplicationScoped
public class Indexer {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/api")
    public Response getAPIList(@QueryParam("tag") String tags) {
        return Response.status(Response.Status.NOT_IMPLEMENTED).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/api/{id}")
    public Response getAPI(@PathParam("id") String apiID) {
        return Response.status(Response.Status.NOT_IMPLEMENTED).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/tag")
    public Response getTagList() {
        return Response.status(Response.Status.NOT_IMPLEMENTED).build();
    }
}
