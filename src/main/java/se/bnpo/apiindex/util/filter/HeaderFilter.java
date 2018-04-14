package se.bnpo.apiindex.util.filter;


import com.sun.jersey.core.util.Priority;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
@Priority(Priorities.HEADER_DECORATOR)
public class HeaderFilter implements ContainerResponseFilter
{
    @Context
    private ResourceInfo resourceInfo;

    @Context
    HttpServletRequest httpRequest;

    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) throws
            IOException
    {
        String origin = requestContext.getHeaders().getFirst("origin");
        responseContext.getHeaders().add("Access-Control-Allow-Origin", origin);
        responseContext.getHeaders().add("Access-Control-Allow-Headers", "*");
    }
}