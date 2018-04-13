package se.bnpo.apiindex.rest;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author Marcus Münger
 */
@Path("/config")
@ApplicationScoped
public class Config {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/test")
    public Response getStatus() {
        return Response.ok().build();
    }
}
