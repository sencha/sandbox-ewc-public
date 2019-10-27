package com.sencha.rest.endpoints;

import com.sencha.rest.models.Ticket;
import com.sencha.rest.models.Tickets;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/tickets")
public class TicketsEndpoint {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@SuppressWarnings("resource")
	public Response getTickets() {
		Tickets tickets = new Tickets();
		tickets.add(new Ticket("Jan", 10));
		tickets.add(new Ticket("Feb", 15));
		tickets.add(new Ticket("Apr", 5));
		tickets.add(new Ticket("May", 50));

		GenericEntity<Tickets> entity = new GenericEntity<Tickets>(tickets) {
		};

		return Response.ok(entity).build();
	}

}
